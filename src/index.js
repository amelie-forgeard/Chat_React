// == Import : npm
import { StrictMode } from 'react';
import { render } from 'react-dom';
// le composant Provider va nous servir à injecter
// le store de redux dans l'application
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import Chatroom from 'src/components/Chatroom';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <StrictMode>
    <Provider store={store}>
      <Chatroom />
    </Provider>
  </StrictMode>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
