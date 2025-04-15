import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from '../components/InputAdmin'
import Select from '../components/SelectAdmin';
import styles from '../styles/UpdateService.module.css'

const UpdateService = () => {
    const [updatedService, setUpdatedService] = useState('');
    const [treatment, setTreatment] = useState(null);
    const [payload, setPayload] = useState({ 
        image : '', 
        title: '', 
        description: '', 
        category: '', 
        price: '', 
        duration: '' })
    
    const treatments = ['Elige una opción: ', 'Tratamiento facial', 'Tratamiento corporal']
    const { id } = useParams();

    const searchService = async () => {

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${id}`,
                {
                    method: 'GET', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    credentials: 'include',
                })

            if (!response.ok) {
                throw new Error('Error al traer los datos de la criptomoneda')
            }

            const data = await response.json();
            console.log(data)
            setTreatment(data)

        } catch (error) {

        }
    }

    useEffect(() => {
        searchService();
    }, [])

    const editService = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${id}`,
                {
                    method: 'PUT', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                    credentials: 'include',
                })

            if (!response.ok) throw new Error(`The service couldn't be created`);

            const data = await response.json();
            setUpdatedService(`El servicio '${payload.title}' ha sido actualizado`)
        } catch (error) {

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value });
      };

      useEffect(() => {
        if (treatment) {
            setPayload({
                image: treatment.image,
                title: treatment.title,
                description: treatment.description,
                category: treatment.category,
                price: treatment.price,
                duration: treatment.duration,
            });
        }
    }, [treatment]);
    

    return (
        <div className={styles.formContainer}>
            <h1>Editar servicio</h1>
            {treatment && 
            <form className={styles.form}>
               
                <Input title={"URL de la imágen"} name={"image"} value={payload.image} onChange={handleChange} />
                <Input title={"Título"} name={"title"} value={payload.title} onChange={handleChange} />
                <Input title={"Descripción"} name={"description"} value={payload.description} onChange={handleChange} />
                <Input title={"Precio"} name={"price"} value={payload.price} onChange={handleChange} />
                <Input title={"Duración"} name={"duration"} value={payload.duration} onChange={handleChange} />

                <Select title={"Categoría"} name={"category"} value={payload.category} onChange={handleChange} options={treatments} />

                <button type="submit" onClick={editService}>Guardar</button>

            </form>
        }
            {updatedService && <p>{updatedService}</p>}

        </div>
    );
}

export default UpdateService;