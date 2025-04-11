import React from 'react';
import { useState } from 'react';
import styles from '../styles/RegalaTova.module.css';

const RegalaTova = () => {
    const [formRegala, setFormRegala] = useState({
        importe: '',
        nombre: '',
        dedicatoria: '',
        telefono: '',
        observaciones:'',
    });
        
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegala({ ...formRegala, [name]: value });
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
        <div className={styles.regala}>
            <div className={styles.titulo}>
                <h1>Regala Tova</h1>
            </div>
        </div>
            <div className={styles.subtitulo}>
                <p>Regala una experiencia totalmente personalizada para tu persona favorita.</p>
                <p>Nosotros nos encargamos del resto.</p>   
            </div>

            <div className={styles.form}>
                <form onSubmit={handleSubmit} >
                    <div className={styles.importe}>
                        <select
                        id="importe"
                        name="importe"
                        value={formRegala.importe}
                        onChange={handleChange}
                        required>
                            <option value="">Elige una opción</option>
                            <option value={100}>100€</option>
                            <option value={150}>150€</option>
                            <option value={200}>200€</option>
                            <option value={250}>250€</option>
                        </select>
                    </div>
                    <div className={styles.nombre}>
                        <label>Nombre y apellidos de la persona regalada:</label>
                        <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        value={formRegala.nombre}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className={styles.dedicatoria}>
                        <label>Escribe tu dedicatoria, si lo deseas:</label>
                        <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formRegala.dedicatoria}
                        onChange={handleChange}
                        />
                    </div>

                    <div className={styles.telefono}>
                        <label>Teléfono:</label>
                        <input 
                        type='tel'
                        id='telefono'
                        name='telefono'
                        value={formRegala.telefono}
                        onChange={handleChange}
                        required
                        />
                        <a>Inserta tu número de teléfono por si te tuviéramos que consultar algo</a>
                    </div>

                    <div className={styles.observaciones}>
                        <textarea
                        id="observaciones"
                        name="observaciones"
                        value={formRegala.observaciones}
                        onChange={handleChange}
                        />
                        <a>Pregúntanos lo que quieras</a>
                    </div>
                    
                    <button type="submit">Enviar</button>
                </form>
            </div>  
        </>
    );
};

export default RegalaTova;