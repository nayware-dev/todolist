import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onDelete, onToggle }) {
  console.log(todos)
return (
  <div className="todo-list">
{todos&&todos.length === 0 ? (
  <p className='empty-message'> No tasks outstanding</p>
) : (
    todos.map(todo => (
      <TodoItem
      key={todo.id}
      todo={todo}
      onDelete={onDelete}
      onToggle={onToggle}
      />
    ))
)}

  </div>
);
}

export default TodoList;