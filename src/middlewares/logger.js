// un middleware est une fonction triple flêchée
// la 1e fonction prend le store en param
// la 2e fonction prend la fonction next en param
// la 3e fonction prend l'action courante en param
// ici on utilise la technique du currying, de faire un param par fonction
// toutes les actions qui sont dispatchées, vont passer par les middlewares tour par tour
const logger = (store) => (next) => (action) => {
  console.log('Logger : ', action);

  // si je veux laisser passer l'action au prochain MW ou au reducer
  // on utilise la fonction next avec l'action en argument
  next(action);
};

export default logger;
