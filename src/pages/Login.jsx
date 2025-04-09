import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import AdminForm from "../components/AdminForm";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();

            const response = await fetch(`${import.meta.env.VITE_URL_API}/login`,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                        Authorization: `Bearer ${idToken}`,
                        credentials: 'include'
                    },
                })

            if (!response.ok) throw new Error(`There was a problem with the login in the backend`);
            
            navigate('/admin');

        } catch (error) {
            console.error('Login error: ', error)
        }

    }

    return (
        <>
            <h1>Inicia sesión</h1>
            <form >
                <input
                    type='email'
                    placeholder='Ingresa tu correo electrónico'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Ingresa tu contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Inicia sesión</button>

            </form>
            <p>¿No estás registrado? <Link to='/register'>Regístrate aquí</Link></p>
        </>
    )
}

export default Login;