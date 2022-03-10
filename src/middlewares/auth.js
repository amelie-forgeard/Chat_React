import axios from 'axios';
import { LOGIN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // ici je veux traiter la requête à mon API
      axios.post('http://localhost:3001/login', {
        email: 'bouclierman@herocorp.io',
        password: 'jennifer',
      })
        .then((response) => console.log(response))
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
