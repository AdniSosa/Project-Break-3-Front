import { useNavigate, useParams } from "react-router-dom";

const SearchButton = async () => {
    const { id } = useParams();
    //const id2 = id.slice(1) --> por si lo necesitamos
    const navigate = useNavigate();

    try {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${id}`)
            
        if (!response.ok) {
            throw new Error('Error al traer los datos de la criptomoneda')
        }

        const data = await response.json();
        console.log(data)
        navigate('/update-service/:id')
        
    } catch (error) {

    }

    return (
        <button> onClick={FindService}Editar</button>
    )
}

export default FindService;