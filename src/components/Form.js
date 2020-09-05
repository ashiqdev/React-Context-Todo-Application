import React, { useContext } from 'react';
import UseInputState from '../hooks/useInputState';
import { store } from '../store/store';
import { addTodoAction } from '../store/action/actions';

const Form = () => {
  const [value, onChangeHandler, reset] = UseInputState('');
  const { dispatch } = useContext(store);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(value));
    reset();
  };
  return (
    <form className='form' onSubmit={onSubmitHandler}>
      <input
        className='form__box'
        type='text'
        onChange={onChangeHandler}
        value={value}
        placeholder='Enter a task...'
        required
      />
      <button className='form__button'>Add Task</button>
    </form>
  );
};

export default Form;
