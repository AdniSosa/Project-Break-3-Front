import { useNavigate } from "react-router-dom";

const NewButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(`/new`)}>Nuevo</button>
        </>
    )
}

export default NewButton;