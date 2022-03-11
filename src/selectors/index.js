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
  if (items.length <= 0) {
    return 0;
  }

  const ids = items.map((item) => item.id);
  return Math.max(...ids);
}

/**
 * fonction qui renvoie un selector, qui détermine si l'auteur du message
 * correspond à l'utilisateur connecté
 * @param {string} author auteur du message
 * @returns selector
 */
export function isMessageMine(author) {
  return (state) => author === state.user.pseudo;
}
