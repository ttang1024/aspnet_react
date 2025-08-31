import React from 'react';
import { FaCheckCircle, FaCircle, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo }) => {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <button 
        className="toggle-button"
        onClick={() => onToggleComplete(todo.id, todo.isCompleted)}
        aria-label={todo.isCompleted ? "Mark as incomplete" : "Mark as complete"}
      >
        {todo.isCompleted ? <FaCheckCircle /> : <FaCircle />}
      </button>
      <span className="todo-text">{todo.title}</span>
      <button 
        className="delete-button"
        onClick={() => onDeleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
