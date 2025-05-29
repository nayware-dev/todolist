import React, { useState } from 'react'
import './TodoForm.css'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  // the form process
  const handleSubmit = (e) => {
    e.preventDefault(); // stops browser refreshing after form is submitted
    if (text.trim()) { // 'trim' the text, if there are no empty spaces, 
      onAdd(text); // add the text to the list
      setText(''); // clear the form after adding item to list
    }
  }


  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Add your to-do task here!'
      />
      <button type='submit'></button> 
      
      </form>
      
 

  )
}

export default TodoForm;
