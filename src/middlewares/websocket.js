import { WS_CONNECT, SEND_MESSAGE } from 'src/actions';

// pour pouvoir utiliser la connexion socket dans tous les case
// on prépare une let hors du MW
let socket;

const websocket = (store) => (next) => (action) => {
  console.log('MW websocket');

  switch (action.type) {
    case WS_CONNECT: {
      // ici on ouvre la connexion bidirectionnelle
      socket = window.io('http://localhost:3001');

      // dès que la connexion est ouverte, on écoute ce qui vient du server
      socket.on('server_message', (message) => {
        console.log(message);
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
