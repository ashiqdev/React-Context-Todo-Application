import React, { useContext } from 'react';
import useEditState from '../hooks/useEditState';
import EditTodoForm from './EditTodoForm';
import { TiEdit, TiDelete } from 'react-icons/ti';
import { store } from '../store/store';
import { removeTodoAction, toggleTodoAction } from '../store/action/actions';

const Todo = ({ todo }) => {
  const [isEdit, toggle] = useEditState(false);
  const { dispatch } = useContext(store);

  return (
    <li className='listItem'>
      {isEdit ? (
        <EditTodoForm toggle={toggle} todo={todo} />
      ) : (
        <div className='round'>
          <input
            type='checkbox'
            id={`checkbox ${todo.id}`}
            checked={todo.completed}
            onChange={() => dispatch(toggleTodoAction(todo.id))}
          />
          <label htmlFor={`checkbox ${todo.id}`}></label>

          <div className='update-delete'>
            <div
              className={`todo__task ${todo.completed ? 'done' : 'notDone'} `}
            >
              {todo.task}
            </div>
            <div className='icon icon-edit' onClick={toggle}>
              <TiEdit />
            </div>
            <div
              className='icon icon-delete'
              onClick={() => dispatch(removeTodoAction(todo.id))}
            >
              <TiDelete />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default Todo;
