import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css'


function App() {
  const [todos, setTodos] = useState(['Wash dishes']); // an empty array ready for todo items to be added to rather than null. array is better and more useful, null can bring up errors
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }; 
  // takes the text from the input box as a parameter, creates a new 'to do' object, creates a new array with all existing items plus the new addition

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  // takes the to do item which matches the id, creates a new array with all the items that do NOT match that id
  //setTodo updates the state with the new array and react re-renders the component with the updated list


  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  // takes the to do item which matches the id, checks whether true or false and switches it over. items that dont match the id are returned unchanged
return (
  
<div className='app'>
  <h1>My To Do List</h1>
  <TodoForm onAdd={addTodo} />
  <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
  </div>
);
}

export default App;
