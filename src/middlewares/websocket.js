import { WS_CONNECT } from 'src/actions';

const websocket = (store) => (next) => (action) => {
  console.log('MW websocket');

  switch (action.type) {
    case WS_CONNECT: {
      // ici on ouvre la connexion bidirectionnelle
      const socket = window.io('http://localhost:3001');

      // dès que la connexion est ouverte, on écoute ce qui vient du server
      socket.on('server_message', (message) => {
        console.log(message);
      });

      // j'envoie un événement depuis le client
      socket.emit('client_message', { author: 'Vincent', content: 'Salut les gens' });
      break;
    }
    default:
      next(action);
  }
};

// bien penser à l'importer dans le store
export default websocket;
