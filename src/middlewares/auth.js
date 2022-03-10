import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // on a accès au store dans les params du MW
      // on peut récupérer le state courant via la méthode getState du store
      const state = store.getState();
      // const { settings: { email, password } } = store.getState();

      // ici je veux traiter la requête à mon API
      axios.post('http://localhost:3001/login', {
        email: state.settings.email,
        password: state.settings.password,
      })
        .then((response) => {
          // une fois qu'on a la réponse du server, on veut stocker les data (pseudo) dans le state
          // on veut modifier notre state qui est dans le store, donc on dispatch une action
          store.dispatch(saveUser(response.data.pseudo));
        })
        .catch((error) => console.log(error));

      // je ne veux pas laisser passer l'action jusqu'au reducer
      // next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
