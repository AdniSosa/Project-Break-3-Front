import { useNavigate } from "react-router-dom";
import styles from '../styles/AppointmentsButton.module.css';

const AppointmentsButton   = () => {
    const navigate = useNavigate();

    return (
        <>
            <button className={styles.AppoimentsButton} onClick={() => navigate("/citas-reservadas")}>
                <span className={`material-icons ${styles.icon}`}>calendar_month</span>
            </button>
        </>
    )
}

export default AppointmentsButton;