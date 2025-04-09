import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
            <div>
                <nav>
                    <Link to='/inicio'>INICIO</Link>
                    <Link to='/tratamientos-faciales'>FACIAL</Link>
                    <Link to='/tratamientos-corporales'>CORPORAL</Link>
                    <Link to='/botox'>BÓTOX</Link>
                    <Link to='/laser'>ESTRÍAS</Link>
                    <Link to='/contacto'>CONTACTO</Link>
                    <Link to='/reservar-online'>RESERVAR ONLINE</Link>
                    <Link to='/regala-tova' >REGALA TOVA</Link>
                </nav>
            </div>
            <div>
                <h1>Regala Tova</h1>
                <p>Regala una experiencia totalmente personalizada para tu persona favorita.</p>
                <p>Nosotros nos encargamos del resto.</p>   
                <img src='https://img.freepik.com/foto-gratis/mujer-orgullosa-su-tarjeta_1098-2749.jpg?uid=R195384068&ga=GA1.1.1117630890.1730399903&semt=ais_country_boost&w=740'alt='regala-Tova' height={300} width={200}/>
            </div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Cantidad</label>
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
            <div>
                <label>Nombre y apellidos de la persona regalada</label>
                <input
                type='text'
                id='nombre'
                name='nombre'
                value={formRegala.nombre}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Escribe tu dedicatoria, si lo deseas</label>
                <textarea
                id="mensaje"
                name="mensaje"
                value={formRegala.dedicatoria}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Teléfono</label>
                <input 
                type='telefono'
                id='telefono'
                name='telefono'
                value={formRegala.telefono}
                onChange={handleChange}
                required
                />
                <a>Inserta tu número de teléfono por si te tuviéramos que consultar algo</a>
            </div>
            <div>
                <label>Observaciones</label>
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
        </>
    );
};

export default RegalaTova;