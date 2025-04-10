const UpdateService = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [duration, setDuration] = useState('')
    const payload = { image, title, description, category, price, duration }
    const [createdService, setCreatedService] = useState('');
    const treatments = ['Elige una opción: ', 'tratamiento facial', 'Tratamiento corporal']


    const searchService = async () => {
        const { id } = useParams();
    //const id2 = id.slice(1) --> por si lo necesitamos
    const navigate = useNavigate();

    try {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${id}`)
            
        if (!response.ok) {
            throw new Error('Error al traer los datos de la criptomoneda')
        }

        const data = await response.json();
        console.log(data)
        navigate('/update-service/:id')
        
    } catch (error) {

    }
    }

    const editService = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/id/:_id`,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                })

            if (!response.ok) throw new Error(`The service couldn't be created`);

            const data = await response.json();
            setCreatedService(`El servicio '${payload.title}' ha sido creado, en la categoría '${payload.category}'`)
        } catch (error) {

        }
    }

    return (
        <>
            <h1>Crear nuevo servicio</h1>
            <form>
                <Input title={"URL de la imágen"} name={"serviceImg"} value={image} onChange={(e) => setImage(e.target.value)} />
                <Input title={"Título"} name={"serviceTitle"} value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input title={"Descripción"} name={"serviceDescription"} value={description} onChange={(e) => setDescription(e.target.value)} />
                <Input title={"Precio"} name={"servicePrice"} value={price} onChange={(e) => setPrice(e.target.value)} />
                <Input title={"Duración"} name={"serviceDuration"} value={duration} onChange={(e) => setDuration(e.target.value)} />

                <Select title={"Categoría"} name={"serviceCategory"} value={category} onChange={(e) => setCategory(e.target.value)} options={treatments} />

                <button type="submit" onClick={editService}>Guardar</button>

            </form>
            {createdService && <p>{createdService}</p>}

        </>
    );
}

export default UpdateService;