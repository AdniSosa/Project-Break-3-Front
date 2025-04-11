import { useNavigate, useParams } from "react-router-dom";

const EditButton = ({ id }) => {
    //const { id } = useParams();
    //const id2 = id.slice(1) --> por si lo necesitamos
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(`/update-service/${id}`)}>Editar</button>
        </>
    )
}

export default EditButton;