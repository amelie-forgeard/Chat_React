import {
  ADD_MESSAGE,
  CHANGE_INPUT_VALUE,
  TOGGLE_SETTINGS,
  CHANGE_VALUE,
  SAVE_USER,
} from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [],
  newMessage: '',
  settings: {
    open: true,
    email: '',
    password: '',
  },
  user: {
    pseudo: 'Anomyme',
  },
};

// le reducer est une fonction qui retourne TOUJOURS un state
// il prend en paramètre le state courant (state initial à la base) et une action
// il retourne un state modifié si le type de l'action correspond avec un case du switch
// sinon il retourne le state courant
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // IMMUTABILITE
      // on ne travaille que sur des nouvelles références
      // ici je mute directement le state courant => INTERDIT
      // state.messages.push(newMessage);

      // on crée une nouvelle référence pour le tableau de messages
      // on déverse les messages du state courant à l'intérieur
      const newMessages = [...state.messages];
      // on injecte le nouveau message dans le nouveau tableau de message
      newMessages.push(action.message);

      return {
        ...state,
        messages: newMessages,
        // on vide aussi newMessage => on vide ce qu'affiche l'input
        newMessage: '',
      };

      // return {
      //   ...state,
      //   messages: [
      //     ...state.messages,
      //     {
      //       id: 999,
      //       author: 'Vincent',
      //       content: 'coucou le chat !',
      //     },
      //   ],
      // };
    }
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        newMessage: action.payload,
      };
    }
    case TOGGLE_SETTINGS: {
      // on est toujours en déclaratif, il faut donc toujours avoir
      // des références nouvelles pour les objets et tableaux
      // IMMUTABILITE
      const newSettings = {
        // on oublie de spread les éventuelles propriétés
        // de l'ancien state dans le nouvel objet
        ...state.settings,
        open: !state.settings.open,
      };

      return {
        ...state,
        settings: newSettings,
      };

      // return {
      //   ...state,
      //   settings: {
      //     ...state.settings,
      //     open: !state.settings.open,
      //   },
      // };
    }
    case CHANGE_VALUE: {
      return {
        ...state,
        settings: {
          ...state.settings,
          // on peut choisir dynamiquement la propriété à changer dans l'objet settings
          // on appelle ça une computed property/propriété calculée
          [action.key]: action.value,
        },
      };
      // if (action.key === 'email') {
      //   // comme on fait un return ici
      //   // on a pas besoin du else
      //   return {
      //     ...state,
      //     settings: {
      //       ...state.settings,
      //       email: action.value,
      //     },
      //   };
      // }

      // return {
      //   ...state,
      //   settings: {
      //     ...state.settings,
      //     password: action.value,
      //   },
      // };
    }
    case SAVE_USER: {
      return {
        ...state,
        settings: {
          // ici on remet le state de settings à zéro
          // on referme le formulaire et on vide les champs
          ...state.settings,
          open: false,
          email: '',
          password: '',
        },
        user: {
          ...state.user,
          pseudo: action.pseudo,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
