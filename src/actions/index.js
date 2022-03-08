// ACTION TYPES
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// ACTION CREATORS
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeInputValue = () => ({
  type: CHANGE_INPUT_VALUE,
});
