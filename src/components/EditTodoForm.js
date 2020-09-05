import React, { useContext } from 'react';
import useInputState from '../hooks/useInputState';
import { store } from '../store/store';
import { editTodoAction } from '../store/action/actions';

const EditTodoForm = ({ todo, toggle }) => {
  const [value, handleChange, reset] = useInputState(todo.task);
  const { dispatch } = useContext(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodoAction({ id: todo.id, task: value }));
    reset();
    toggle(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoFocus
        className='edit'
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default EditTodoForm;
