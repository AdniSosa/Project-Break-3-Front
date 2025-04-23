const useFecth = async (e) => {
    e.preventDefault();
    const fetchApi = async ({method, url}) => {
        

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            //console.log(user)

            const response = await fetch(`${import.meta.env.VITE_URL_API}/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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
    
}

export default useFecth;