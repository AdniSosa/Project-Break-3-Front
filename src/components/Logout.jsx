import useLoggedUser from "../hooks/useLoggedUser";
import styles from '../styles/Logout.module.css';
import logoutIcon from '../public/logouticon.png'

const Logout = () => {
    const {userLogout} = useLoggedUser();

    const handleLogout = async () => {
        try {
          await fetch(`${import.meta.env.VITE_URL_API}/logout`, {
            method: 'POST',
            credentials: 'include', // para que mande la cookie
          });
          
          userLogout();
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
      };
    
  return(
    <>
      <button className={styles.buttonlogout} onClick={handleLogout}>
        <span className={`material-icons ${styles.icon}`}>logout</span>
      </button>
    </>
  )
}

export default Logout;