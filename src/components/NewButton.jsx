import { useNavigate } from "react-router-dom";
import styles from '../styles/NewButton.module.css'

const NewButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className={styles.newbutton} onClick={() => navigate('/nuevo-servicio')}>
                <span class={`material-icons ${styles.icon}`}>add</span>
            </button>
        </>
    )
}


export default NewButton;