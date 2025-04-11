import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { UserLoggedProvider } from "./contexts/UserLoggedContext";
import useUserLogged from "./hooks/useLoggedUser";

import Contacto from "./pages/Contacto";
import TratamientosFaciales from "./components/TratamientosFaciales";
import TratamientosCorporales from "./components/TratamientosCorporales";
import Inicio from "./pages/Inicio";
import AcmellaOleracea from "./pages/AcmellaOleracea";
import Estrias from "./pages/Estrias";
import RegalaTova from "./pages/RegalaTova";
import ReservarOnline from "./pages/ReservarOnline";
import NewService from "./pages/NewService";
import UpdateService from "./pages/UpdateService";
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './components/Logout';
import NewButton from "./components/NewButton";
import NavBar from './components/NavBar';
import NavBarAdmin from "./components/NavBarAdmin";
import './App.css';
import Footer from "./components/Footer";
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  //const { userLogged } = useUserLogged();

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
          <Route path='/acmella-oleracea' element={<AcmellaOleracea />} />

          <Route path='/admin' element={
            <ProtectedRoutes>
              <>
                <Inicio />
                <NavBarAdmin />
              </>
            </ProtectedRoutes>}
          />
          <Route path="/new" element={
            <ProtectedRoutes>
              <>
                <NewService />
                <NavBarAdmin />
              </>
            </ProtectedRoutes>} />
          <Route path="/update-service/:id" element={<ProtectedRoutes><><UpdateService /> <Logout /></></ProtectedRoutes>} />
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
