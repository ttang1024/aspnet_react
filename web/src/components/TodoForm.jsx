import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!title.trim()) {
      setError('Please enter a todo item');
      return;
    }
    
    // Call parent component's function to add the todo
    onAddTodo(title.trim());
    
    // Reset form
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError(''); // Clear error when user starts typing
        }}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">Add</button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
};

export default TodoForm;
