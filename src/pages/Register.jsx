import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../styles/Register.module.css'

const Register = () => {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const payload = {
            email, 
            password
        }

        const handleSubmit = async (e) => {
            e.preventDefault(); 

            let urlApi = import.meta.env.VITE_URL_API + '/register'
    
            try {
                const response = await fetch(urlApi,
                    {
                        method: 'POST', // Método HTTP
                        headers: {
                            'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                        },
                        body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                        credentials: 'include'
                    })

                    console.log(response)
    
                    if(!response.ok) throw new Error (`There was a problem with the registration`);
                    
                    navigate('/login')

            } catch (error) {
                console.error(error)
            }
                
        }

    return (
        <>
        <div className={styles.inicio}> 
            <h1>¡Regístrate aquí!</h1>
            <h2 className={styles.subtitulo}>Si ya estás registrado:</h2>
            <h2><Link to='/login' className={styles.subtituloboton}>Inicia sesión aquí</Link></h2>
        </div>

        <div className={styles.register}> 
            <form onSubmit={handleSubmit}className={styles.form}>
                <input 
                    type='email' 
                    placeholder='Ingresa tu correo electrónico'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type='password' 
                    placeholder='Ingresa tu contraseña' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                <button type="submit" className={styles.boton}>Regístrate</button>

            </form>
        </div>
        
        </>
    )
}
export default Register;