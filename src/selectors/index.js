/* eslint-disable import/prefer-default-export */

// Selectors
// des fonctions qui prennent en paramètre le state ou une partie du state
// et elle renvoie des données dérivées de ce state

/**
 * fonction qui retourne l'id max d'un tableau d'objet
 * @param {array} items tableau d'objet avec une propriété id
 * @returns id max
 */
export function getHighestId(items) {
  const ids = items.map((item) => item.id);
  return Math.max(...ids);
}
