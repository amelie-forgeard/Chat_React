// ACTION TYPES
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// ACTION CREATORS
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  // payload: les data qu'on transporte via les propriétés de l'action
  payload: value,
});
