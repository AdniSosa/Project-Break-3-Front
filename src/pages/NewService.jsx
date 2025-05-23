import { useState } from "react";
import Input from "../components/InputAdmin";
import Select from "../components/SelectAdmin";
import styles from '../styles/NewService.module.css';


const NewService = () => {
    const [payload, setPayload] = useState({
        image: '',
        title: '',
        description: '',
        category: '',
        price: '',
        duration: ''
    })
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
            <div className={styles.titulo}>
                <h1>Crear nuevo servicio</h1>
            </div>

            <div className={styles.new}>
                <form className={styles.form}>
                    <Input title={"URL de la imágen"} name={"image"} value={payload.image} onChange={handleChange} className={styles.img} />
                    <Input title={"Título"} name={"title"} value={payload.title} onChange={handleChange} className={styles.inputTitulo} />
                    
                    <label className="label-textarea" htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        className={styles.descripcion}
                        title="Descripción"
                        name="description"
                        value={payload.description}
                        onChange={handleChange}>
                    </textarea>
                    
                    <Input title={"Precio"} name={"price"} value={payload.price} onChange={handleChange} className={styles.precio} />
                    <Input title={"Duración"} name={"duration"} value={payload.duration} onChange={handleChange} className={styles.duracion} />

                    <Select title={"Categoría"} name={"category"} value={payload.category} onChange={handleChange} options={treatments} />
                <div contenedorBtn>
                    <button className={styles.boton} type="submit" onClick={createService}>Crear nuevo tratamiento</button>
                </div>
                </form>
            {createdService && <p className={styles.message}>{createdService}</p>}
            </div>
        </>
    );
};

export default NewService;