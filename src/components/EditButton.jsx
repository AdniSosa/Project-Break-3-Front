import { useNavigate } from "react-router-dom";

const EditButton = ({ id }) => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(`/update-service/${id}`)}>Editar</button>
        </>
    )
}

export default EditButton;