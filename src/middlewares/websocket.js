const websocket = (store) => (next) => (action) => {
  console.log('MW websocket');

  switch (action.type) {
    
    default:
      next(action);
  }
};

// bien penser à l'importer dans le store
export default websocket;
