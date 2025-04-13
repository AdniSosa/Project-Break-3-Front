import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import useLoggedUser from "../hooks/useLoggedUser"
import styles from '../styles/Login.module.css'


const Login = () => {
    const {isUserLogin} = useLoggedUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            console.log(user)


            const response = await fetch(`${import.meta.env.VITE_URL_API}/login`,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify({ token: idToken }),
                    credentials: 'include'
                })

            if (!response.ok) throw new Error(`There was a problem with the login in the backend`)
            
            isUserLogin(idToken);
            navigate('/admin');

        } catch (error) {
            console.error('Login error: ', error)
            setMessage('Usuario y/o contraseña incorrectos')
        }
    }

    const detectClick = () => {
        setMessage('')
    }  

    return (
        <>
            <div className={styles.inicio}> 
                <h1>Inicia sesión</h1>
                <h2 className={styles.subtitulo}>¿No estás registrado?</h2>
                <h2> <Link to='/register' className={styles.subtituloboton}>Regístrate aquí</Link></h2>
            </div>
            
            <div className={styles.login}>
                <form className={styles.form}>
                    <input
                        type='email'
                        placeholder='Ingresa tu correo electrónico'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onClick={() => detectClick()}
                        required
                    />
                    <input
                        type='password'
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" onClick={handleSubmit} className={styles.boton}>Inicia sesión</button>

                </form>
            </div>   

                {message && <p>{message}</p>}
        </>
    )
}

export default Login;