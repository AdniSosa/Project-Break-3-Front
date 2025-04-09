import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Contacto from "./components/Contacto";
import AcercaDeTova from "./components/AcercaDeTova";
import TratamientosFaciales from "./components/TratamientosFaciales";
import TratamientosCorporales from "./components/TratamientosCorporales";
import Home from "./components/Home";
import RegalaTova from "./components/RegalaTova";
import PideCita from "./components/PideCita";
import New from "./components/New";
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';
import './App.css';

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
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} //la propiedad "replace" evitará redirecciones adicionales después de que el usuario haga clic en "atrás" 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
