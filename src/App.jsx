import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Contacto from "./pages/Contacto";
import TratamientosFaciales from "./components/TratamientosFaciales";
import TratamientosCorporales from "./components/TratamientosCorporales";
import Inicio from "./pages/Inicio";
import RegalaTova from "./pages/RegalaTova";
import ReservaOnline from "./pages/ReservaOnline";
import New from "./pages/New";
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';
import NavBar from "./components/NavBar";
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tratamientos-faciales" element={<TratamientosFaciales />} />
          <Route path="/tratamientos-corporales" element={<TratamientosCorporales />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/regala-tova" element={<RegalaTova />} />
          <Route path="/reserva-online" element={<ReservaOnline />} />
          <Route path="/new" element={<New />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} //la propiedad "replace" evitará redirecciones adicionales después de que el usuario haga clic en "atrás" 
          />
        </Routes>
    </Router>
  );
}

export default App;
