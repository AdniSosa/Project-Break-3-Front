/*CÓDIGO BASE VITE
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default App*/


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contacto from "./components/Contacto";
import AcercaDeTova from "./components/AcercaDeTova";
import TratamientosFaciales from "./components/TratamientosFaciales";
import TratamientosCorporales from "./components/TratamientosCorporales";
import Home from "./components/Home";
import RegalaTova from "./components/RegalaTova";
import PideCita from "./components/PideCita";
import New from "./components/New";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/contactos" element={<Contacto />} />
          <Route path="/acerca-de-tova" element={<AcercaDeTova />} />
          <Route path="/tratamientos-faciales" element={<TratamientosFaciales />} />
          <Route path="/tratamientos-corporales" element={<TratamientosCorporales />} />
          <Route path="/home" element={<Home />} />
          <Route path="/regala-tova" element={<RegalaTova />} />
          <Route path="/pide-cita" element={<PideCita />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
