import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todo'
import './App.css'

function App() {
  
  const [todos,setTodo]=useState([]);
  fetch("http://localhost:3000/todos").then(async function(data){
      const json=await data.json();
      setTodo(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
