import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef}type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Todos</button>
    <div>0 left todo</div>
    </>
  )
}

export default App;
