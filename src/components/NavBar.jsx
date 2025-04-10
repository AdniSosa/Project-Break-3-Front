import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/inicio'>INICIO</Link>
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