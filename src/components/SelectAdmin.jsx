const SelectAdmin = ({title, name, value, onChange, options}) => {
    return (
        <>
            <label htmlFor={name}>{title}: </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required>
                    {options.map(treatment => (
                        <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
            </select>
        </>
    )
}

export default SelectAdmin;