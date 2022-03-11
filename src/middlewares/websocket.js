import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

// pour pouvoir utiliser la connexion socket dans tous les case
// on prépare une let hors du MW
let socket;
// on peut se connecter directement au WS
// const socket = window.io('http://localhost:3001');

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      // ici on ouvre la connexion bidirectionnelle
      socket = window.io('http://localhost:3001');

      // dès que la connexion est ouverte, on écoute ce qui vient du server
      socket.on('server_message', (message) => {
        // quand on reçoit un nouveau message, il faut le stocker dans le state
        // changement de state => dispatch d'action
        store.dispatch(addMessage(message));
      });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();

      // j'envoie un événement depuis le client
      socket.emit('client_message', {
        author: state.user.pseudo,
        content: state.newMessage,
      });
      break;
    }
    default:
      next(action);
  }
};

// bien penser à l'importer dans le store
export default websocket;
