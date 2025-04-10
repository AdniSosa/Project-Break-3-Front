import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await fetch(`${import.meta.env.VITE_URL_API}/logout`, {
            method: 'POST',
            credentials: 'include', // para que mande la cookie
          });
    
          navigate('/');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
      };
    
    return (
        <button onClick={handleLogout}>Cierra sesión</button>
    )
}

export default Logout;