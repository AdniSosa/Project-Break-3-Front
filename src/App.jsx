/*CÓDIGO BASE VITE
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import './App.css';
import React from 'react';
import RoutesApp from './routes/RoutesApp';
import { CookiesProvider } from 'react-cookie';

function App() {

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


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contacto from './components/Contacto';
import Botox from './components/Botox';
import Estrias from './components/Estrias';
import TratamientosFaciales from './components/TratamientosFaciales';
import TratamientosCorporales from './components/TratamientosCorporales';
import Inicio from './components/Inicio';
import RegalaTova from './components/RegalaTova';
import ReservarOnline from './components/ReservarOnline';
import New from './components/New';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/botox' element={<Botox />} />
          <Route path='/estrias' element={<Estrias />} />
          <Route path='/tratamientos-faciales' element={<TratamientosFaciales />} />
          <Route path='/tratamientos-corporales' element={<TratamientosCorporales />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/regala-tova' element={<RegalaTova />} />
          <Route path='/reservar-online' element={<ReservarOnline />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
