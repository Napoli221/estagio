import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Background from './components/Background'
import Cadastro from './components/Cadastro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background/>
     <Cadastro/>
    </>
  )
}

export default App
