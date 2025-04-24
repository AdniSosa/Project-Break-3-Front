
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/NavBar.module.css';
import NewButton from './NewButton';
import Logout from './Logout';
import AppointmentsButton from './AppointmentsButton';
import useLoggedUser from "../hooks/useLoggedUser"

const NavBar = () => {
    const { userLogged } = useLoggedUser();
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className={styles.banner}>
                <p className={styles.banner1}>¡15 AÑOS CUIDÁNDOTE! DISFRUTA DE UN 15% DE DESCUENTO EN TODOS NUESTROS TRATAMIENTOS</p>
            </div>

            <nav className={!userLogged ? styles.navbar : styles.login}>
                <div className={styles.container}>
                    <img src='https://res.cloudinary.com/dljpuje5r/image/upload/v1745252932/Tova_cn1yyn.png' alt='logo' className={styles.logo} />
                </div>
{toggle && 
                <div className={styles.links}>
                    {!userLogged ? <Link to='/inicio'>INICIO</Link> : <Link to='/admin'>ADMINISTRADOR</Link>}
                    <Link to='/tratamientos-faciales'>FACIAL</Link>
                    <Link to='/tratamientos-corporales'>CORPORAL</Link>
                    {!userLogged ? <Link to='/acmella-oleracea'>ACMELLA OLERACEA</Link> : null}
                    {!userLogged ? <Link to='/estrias'>ESTRÍAS</Link> : null}
                    {!userLogged ? <Link to='/contacto'>CONTACTO</Link> : null}
                    {!userLogged ? <Link to='/reservar-online'>RESERVA</Link> : null}
                    {!userLogged ? <Link to='/regala-tova' className={styles.regalaTova}>REGALA TOVA</Link> : null}
                    {!userLogged ? null : <div><NewButton /><Logout /></div>}
                    {!userLogged ? null : <div><AppointmentsButton /></div>}
                </div>
                }

                <div className={styles.burger} aria-label='Abrir menú de navegación' onClick={() => setToggle(!toggle)}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </nav>

        </>
    )
}

export default NavBar;

