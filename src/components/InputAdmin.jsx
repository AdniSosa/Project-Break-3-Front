const InputAdmin = ( {title, name, value, onChange, onClick}) => {
    return (
        <>
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
        </>
    )
}

export default InputAdmin;