import { useState } from "react";
import Input from "../components/InputAdmin";
import Select from "../components/SelectAdmin";

const NewService = () => {
     const [payload, setPayload] = useState({ 
        image : '', 
        title: '', 
        description: '', 
        category: '', 
        price: '', 
        duration: '' })
    const [createdService, setCreatedService] = useState('');
    const treatments = ['Elige una opción: ', 'Tratamiento facial', 'Tratamiento corporal']

    const createService = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/create`,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                    credentials: 'include',
                })

            if (!response.ok) throw new Error(`The service couldn't be created`);

            const data = await response.json();
            setCreatedService(`El servicio '${payload.title}' ha sido creado, en la categoría '${payload.category}'`)
        } catch (error) {

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({ ...payload, [name]: value });
      };

    return (
        <>
            <h1>Crear nuevo servicio</h1>
            <form>
                <Input title={"URL de la imágen"} name={"image"} value={payload.image}  onChange={handleChange}/>
                <Input title={"Título"} name={"title"} value={payload.title}  onChange={handleChange}/>
                <Input title={"Descripción"} name={"description"} value={payload.description}  onChange={handleChange}/>
                <Input title={"Precio"} name={"price"} value={payload.price}  onChange={handleChange}/>
                <Input title={"Duración"} name={"duration"} value={payload.duration}  onChange={handleChange}/>

                <Select title={"Categoría"} name={"category"} value={payload.category}  onChange={handleChange} options={treatments}/>
               
                <button type="submit" onClick={createService}>Guardar</button>

            </form>
            {createdService && <p>{createdService}</p>}

        </>
    );
};

export default NewService;