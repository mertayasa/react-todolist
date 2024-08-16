import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue} = props

  return (
    <header style={{marginBottom: "10px"}}>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }}
      placeholder='Enter todo....' />
      <button onClick={() => {
        handleAddTodos(todoValue)
        setTodoValue('')
      }}
      >Add</button>
    </header>
  )
}
