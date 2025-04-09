import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
     const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [loading, setLoading] = useState('');
        const navigate = useNavigate();
        const payload = {
            email, 
            password
        }

        const handleSubmit = async (e) => {

            let urlApi = import.meta.env.VITE_URL_API + '/register'
    
            try {
                const response = await fetch(urlApi,
                    {
                        method: 'POST', // Método HTTP
                        headers: {
                            'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                        },
                        body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
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
        <h1>¡Regístrate aquí!</h1>
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
            <button type="submit" onClick={handleSubmit}>Enviar</button>

        </form>

        <p>¿Estás registrado? <Link to='/login'>Inicia sesión aquí</Link></p>
        </>
    )
}
export default Register;