const SelectAdmin = ({title, name, value, onChange}) => {
    return (
        <>
            <label htmlFor={name}>{title}: </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required>
                <option value="">Elige una opción</option>
                <option value={"Tratamiento facial"}>Tratamiento facial</option>
                <option value={"Tratamiento corporal"}>Tratamiento corporal</option>
            </select>
        </>
    )
}

export default SelectAdmin;