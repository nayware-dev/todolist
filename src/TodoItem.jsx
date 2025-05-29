import React from 'react'
import './TodoItem.css'

function TodoItem({ todo, onDelete, onToggle}) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => onToggle(todo.id)}
    />
    <p>{todo.text}</p>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>

  )
}

export default TodoItem;