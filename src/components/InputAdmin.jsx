import styles from '../styles/InputAdmin.module.css'

const InputAdmin = ( {title, name, value, onChange, onClick}) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name}>{title}: </label>
            <input
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                onClick={onClick}
                required
            />
        </div>
    )
}

export default InputAdmin;