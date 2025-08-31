import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (title) => {
    try {
      const newTodo = await createTodo({ title, isCompleted: false });
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error(err);
    }
  };

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        const updatedTodo = { ...todoToUpdate, isCompleted: !currentStatus };
        await updateTodo(id, updatedTodo);
        setTodos(todos.map(todo => 
          todo.id === id ? { ...todo, isCompleted: !currentStatus } : todo
        ));
      }
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <TodoForm onAddTodo={handleAddTodo} />
      
      {loading ? (
        <div className="loading">Loading todos...</div>
      ) : (
        <TodoList 
          todos={todos} 
          onToggleComplete={handleToggleComplete} 
          onDeleteTodo={handleDeleteTodo} 
        />
      )}
    </div>
  );
}

export default App;
