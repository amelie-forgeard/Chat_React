import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import logger from 'src/middlewares/logger';
import auth from 'src/middlewares/auth';

// ici si la fonction __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ existe, on viendra connecter
// le Redux Devtools avec la prise en charge des autres enhancers(ex: Middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// le store est le gardien du state
// il a 3 méthodes principales
// - getState: lire le state
// - dispatch: modifier le state
// - subscribe: s'abonner au changement de state (plus besoin avec react-redux)
// le createStore prend en argument la fonction reducer
// qui permet de retourner le state
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, auth)),
);

export default store;
