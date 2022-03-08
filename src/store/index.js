import { createStore } from 'redux';
import reducer from 'src/reducers';

// le store est le gardien du state
// il a 3 méthodes principales
// - getState: lire le state
// - dispatch: modifier le state
// - subscribe: s'abonner au changement de state (plus besoin avec react-redux)
// le createStore prend en argument la fonction reducer
// qui permet de retourner le state
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
