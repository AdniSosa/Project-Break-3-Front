import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const redirect = (e) => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <button onClick={redirect}>Cierra sesión</button>
    )
}

export default Logout;