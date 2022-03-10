const auth = (store) => (next) => (action) => {
  console.log('auth MW');
  switch (action.type) {
    default:
      next(action);
  }
};

export default auth;
