import React, { useState } from 'react';
import './App.css';

// component todo form
const TodoForm = ({ value, setValue, todos, setTodos }) => {

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDos = [...todos];
    const elm = {
      id: Math.random(),
      content: value
    }
    setTodos(newToDos.concat(elm))
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleOnChange} />
      <button>Add todo</button>
    </form>
  )
}

// component todolist
const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {
        todos.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} content={todo.content} setTodos={setTodos} todos={todos} />
          )
        })
      }
    </ul>
  )
}

// component todo
const Todo = ({ content, id, setTodos, todos }) => {
  const handleRemove = (id) => {
    const newTodos = [...todos];
    const Filter = newTodos.filter(todo => todo.id !== id);
    setTodos(Filter)
  }
  return (
    <li>{content} <button onClick={() => handleRemove(id)}>X</button></li>
  )
}

// component App
function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Buy milk' },
    { id: 2, content: 'Buy peanut' }
  ])
  const [value, setValue] = useState('');


  return (
    <div className="App">
      <TodoForm value={value} setValue={setValue} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
