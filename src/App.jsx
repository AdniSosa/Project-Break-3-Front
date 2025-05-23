import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { UserLoggedProvider } from "./contexts/UserLoggedContext";

import Contacto from "./pages/Contacto";
import TratamientosFaciales from "./pages/TratamientosFaciales";
import TratamientosCorporales from "./pages/TratamientosCorporales";
import MasInfo from "./pages/MasInfo";
import Inicio from "./pages/Inicio";
import AcmellaOleracea from "./pages/AcmellaOleracea";
import Estrias from "./pages/Estrias";
import RegalaTova from "./pages/RegalaTova";
import ReservarOnline from "./pages/ReservarOnline";
import NewService from "./pages/NewService";
import UpdateService from "./pages/UpdateService";
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import './App.css';
import Footer from "./components/Footer";
import ProtectedRoutes from './components/ProtectedRoutes';
import Appointments from "./pages/Appointments";

function App() {

  return (
    <UserLoggedProvider>
      <Router>

        <NavBar />
        
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tratamientos-faciales" element={<TratamientosFaciales />} />
          <Route path="/tratamientos-corporales" element={<TratamientosCorporales />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/regala-tova" element={<RegalaTova />} />
          <Route path="/reservar-online" element={<ReservarOnline />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/estrias' element={<Estrias />} />
          <Route path='/acmella-oleracea' element={<AcmellaOleracea/>} />
          <Route path='/tratamientos-faciales/mas-info/id/:_id' element={<MasInfo/>} />
          <Route path='/tratamientos-corporales/mas-info/id/:_id' element={<MasInfo/>} />

        
          <Route path='/admin' element={<ProtectedRoutes><Inicio /></ProtectedRoutes>} />
          <Route path="/nuevo-servicio" element={<ProtectedRoutes><NewService /></ProtectedRoutes>} />
          <Route path="/update-service/:id" element={<ProtectedRoutes><UpdateService /></ProtectedRoutes>} />
          <Route path='/citas-reservadas' element={<ProtectedRoutes><Appointments /></ProtectedRoutes>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} //la propiedad "replace" evitará redirecciones adicionales después de que el usuario haga clic en "atrás" 
          />
        </Routes>

        <Footer />
      </Router>
    </UserLoggedProvider>
  );
}

export default App;


