import { useNavigate, useParams } from "react-router-dom";

const DeleteButton = ({ id, setDeletedService }) => {
    const navigate = useNavigate();

    const deleteService = async (e) => {
        //e.preventDefault()
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${id}`,
                {
                    method: 'DELETE', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    credentials: 'include',
                })

            if (!response.ok) throw new Error(`The service couldn't be deleted`);

            const data = await response.json();
            console.log(data.deletedService.title)
            setDeletedService(`El servicio '${data.deletedService.title}' ha sido borrado`)
        } catch (error) {
            console.error('Error: ', error)
        }
    }


    return (
        <>
            <button onClick={() => deleteService()}>Borrar</button>
        </>
    )
}

export default DeleteButton;