// ACTION TYPES
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATORS
export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  // payload: les data qu'on transporte via les propriétés de l'action
  payload: value,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (pseudo) => ({
  type: SAVE_USER,
  pseudo,
});
