import { Link } from 'react-router-dom';
import useLoggedUser from "../hooks/useLoggedUser"

const NavBar = () => {
    const {userLogged} = useLoggedUser();
    return (
        <nav>
            {!userLogged ? <Link to='/inicio'>INICIO</Link> : <Link to='/admin'>INICIO</Link>}
            <Link to='/tratamientos-faciales'>FACIAL</Link>
            <Link to='/tratamientos-corporales'>CORPORAL</Link>
            <Link to='/botox'>BÓTOX</Link>
            <Link to='/laser'>ESTRÍAS</Link>
            <Link to='/contacto'>CONTACTO</Link>
            <Link to='/reservar-online'>RESERVAR ONLINE</Link>
            <Link to='/regala-tova' >REGALA TOVA</Link>
        </nav>
    )
}

export default NavBar;