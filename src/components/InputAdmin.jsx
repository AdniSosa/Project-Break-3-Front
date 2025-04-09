const InputAdmin = ( {title, name, value, onChange}) => {
    return (
        <>
            <label htmlFor={name}>{title}: </label>
            <input
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </>
    )
}

export default InputAdmin;