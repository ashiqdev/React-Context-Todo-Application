import React from 'react';

import { createContext, useReducer } from 'react';
import reducer from './reducer';

const init = {
  todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
};

const store = createContext(init);

const { Provider } = store;

// wrapper
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
