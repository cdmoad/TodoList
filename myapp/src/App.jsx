import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/banner'
import MyForm from './components/form'
import Todo from './components/todo'
import Navbar from './layouts/navbar'
import Users from './components/users'
import Add from './components/add'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<><Banner/><MyForm/></>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/add/:id" element={<Add/>} />
      </Routes>
     
    </Router>
     
    </>
  )
}

export default App
