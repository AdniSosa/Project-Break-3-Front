import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Logout from '../components/Logout'


const RoutesApp = () => {
    return (
        <Router>
            <Logout />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path="*" element={<Navigate to="/" replace />} //la propiedad "replace" evitará redirecciones adicionales después de que el usuario haga clic en "atrás"
    />
            </Routes>
        </Router>
    )
}

export default RoutesApp;