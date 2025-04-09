import { useState } from "react";

const New = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [duration, setDuration] = useState('')
    const payload = { image, title, description, category, price, duration }
    const [createdService, setCreatedService] = useState('');

    const newService = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/create`,
                {
                    method: 'POST', // Método HTTP
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                    },
                    body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
                })

            if (!response.ok) throw new Error(`The service couldn't be created`);

            const data = await response.json();
        } catch (error) {

        }
    }

    return (
        <>
            <h1>Crear nuevo servicio</h1>
            <form>
                <label htmlFor="serviceImg">Imágen: </label>
                <input
                    id="serviceImg"
                    type="text"
                    placeholder="URL de imagen"
                    name='serviceImg'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="serviceTitle">Título: </label>
                <input
                    id="serviceTitle"
                    type="text"
                    name='serviceImg'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="serviceDescription">Descripción: </label>
                <input
                    id="serviceDescription"
                    type="text"
                    name='serviceDescription'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="servicePrice">Precio: </label>
                <input
                    id="servicePrice"
                    type="text"
                    name='servicePrice'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label htmlFor="serviceDuration">Duración: </label>
                <input
                    id="serviceDuration"
                    type="text"
                    name='serviceDuration'
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <label htmlFor="serviceCategory">Categoría: </label>
                <select>
                    <option>Tratamiento facial</option>
                    <option>Tratamiento corporal</option>
                </select>
               
                <button type="submit" onClick={handleSubmit}>Guardar</button>

            </form>
            {createdService && <p>{createdService}</p>}

        </>
    );
};

export default New;