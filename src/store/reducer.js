import { v4 as uuid } from 'uuid';
import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from './action/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: uuid(), task: action.payload, completed: false },
        ],
      };

    case EDIT_TODO:
      const { id, task } = action.payload;

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, task } : todo
        ),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
