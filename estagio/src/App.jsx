import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Cadastrar from './pages/Cadastro';
import Formulario from './pages/Formulario';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastrar" element={<Cadastrar />} />
        <Route path="/Formularios" element={<Formulario />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
