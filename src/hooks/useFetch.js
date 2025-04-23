const useFecth = async ({method, url}) => {
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

}

export default useFecth;