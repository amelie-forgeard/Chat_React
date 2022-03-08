import { ADD_MESSAGE, CHANGE_INPUT_VALUE } from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 11,
      author: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'stp ?',
    },
  ],
  newMessage: '',
};

// le reducer est une fonction qui retourne TOUJOURS un state
// il prend en paramètre le state courant (state initial à la base) et une action
// il retourne un state modifié si le type de l'action correspond avec un case du switch
// sinon il retourne le state courant
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const maxId = getHighestId(state.messages);

      // on prépare le nouveau message à injecter
      const newMessage = {
        id: maxId + 1,
        author: 'Vincent',
        content: state.newMessage,
      };

      // IMMUTABILITE
      // on ne travaille que sur des nouvelles références
      // ici je mute directement le state courant => INTERDIT
      // state.messages.push(newMessage);

      // on crée une nouvelle référence pour le tableau de messages
      // on déverse les messages du state courant à l'intérieur
      const newMessages = [...state.messages];
      // on injecte le nouveau message dans le nouveau tableau de message
      newMessages.push(newMessage);

      return {
        ...state,
        messages: newMessages,
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
    default:
      return state;
  }
};

export default reducer;
