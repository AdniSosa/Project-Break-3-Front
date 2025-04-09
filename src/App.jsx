

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contacto from './components/Contacto';
import Botox from './components/Botox';
import Estrias from './components/Estrias';
import TratamientosFaciales from './components/TratamientosFaciales';
import TratamientosCorporales from './components/TratamientosCorporales';
import Inicio from './components/Inicio';
import RegalaTova from './components/RegalaTova';
import PideCita from './components/PideCita';
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
          <Route path='/pide-cita' element={<PideCita />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
