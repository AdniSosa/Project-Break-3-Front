import { useNavigate } from "react-router-dom";
import styles from '../styles/NewButton.module.css'

const NewButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className={styles.button} onClick={() => navigate(`/new`)}>+</button>
        </>
    )
}

export default NewButton;