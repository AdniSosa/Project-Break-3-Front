import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import NewButton from './NewButton';
import Logout from './Logout';
import useLoggedUser from "../hooks/useLoggedUser"

const NavBar = () => {
    const {userLogged} = useLoggedUser();
    return (
        <>
        <div className={styles.banner}>
            <p className={styles.banner1}>¡15 AÑOS CUIDÁNDOTE! DISFRUTA DE UN 15% DE DESCUENTO EN TODOS NUESTROS TRATAMIENTOS</p>
        </div>
        <nav className={styles.navbar}>
            {!userLogged ? <Link to='/inicio'>INICIO</Link> : <Link to='/admin'>INICIO</Link>}
            <Link to='/tratamientos-faciales'>FACIAL</Link>
            <Link to='/tratamientos-corporales'>CORPORAL</Link>
            <Link to='/acmella-oleracea'>ACMELLA OLERACEA</Link>
            <Link to='/estrias'>ESTRÍAS</Link>
            <Link to='/contacto'>CONTACTO</Link>
            {!userLogged ? <Link to='/reservar-online'>RESERVAR ONLINE</Link> : null}
            
            {!userLogged ? <div className={styles.regalaTova}><Link to='/regala-tova' >REGALA TOVA</Link></div> : (<div><NewButton /> <Logout/></div>)}
            
        </nav>
        </>
    )
}

export default NavBar;