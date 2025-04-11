import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
    return (
        <>
        <div className={styles.banner}>
            <p className={styles.banner1}>¡15 AÑOS CUIDÁNDOTE! DISFRUTA DE UN 15% DE DESCUENTO EN TODOS NUESTROS TRATAMIENTOS</p>
        </div>
        <nav className={styles.navbar}>
            <Link to='/inicio'>INICIO</Link>
            <Link to='/tratamientos-faciales'>FACIAL</Link>
            <Link to='/tratamientos-corporales'>CORPORAL</Link>
            <Link to='/Acmella Oleracea'>ACMELLA OLERACEA</Link>
            <Link to='/laser'>ESTRÍAS</Link>
            <Link to='/contacto'>CONTACTO</Link>
            <Link to='/reservar-online'>RESERVAR ONLINE</Link>
            <div className={styles.regalaTova}>
            <Link to='/regala-tova' >REGALA TOVA</Link>
            </div>
        </nav>
        </>
    )
}

export default NavBar;