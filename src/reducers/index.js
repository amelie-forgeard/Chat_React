const initialState = {
  messages: [
    {
      id: 1,
      author: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'stp ?',
    },
  ],
};

// le reducer est une fonction qui retourne TOUJOURS un state
// il prend en paramètre le state courant (state initial à la base) et une action
// il retourne un state modifié si le type de l'action correspond avec un case du switch
// sinon il retourne le state courant
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
