import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import styles from '../styles/MasInfo.module.css';

const MasInfo = () => {
    const [tratamiento, setTratamiento] = useState(null);
    const { _id } = useParams();
    
    
    const getMasInfo = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/id/${_id}`)
            if (!response.ok) throw new Error("Tratamiento no encontrado");
            const data = await response.json();
            setTratamiento(data);
            console.log(data)

        } catch (error) {
            console.error(error.message);
        }
        };
    
        useEffect(() =>{
            getMasInfo()
        }, [])

        if (!tratamiento) return <p>Cargando tratamiento...</p>;

        return (
            <>
                <div
                    className={styles.fondo}
                    style={{
                        backgroundImage: `linear-gradient(rgba(246, 233, 217, 0.5), rgba(248, 230, 210, 0.5)),url(${tratamiento.image})`,
                    }}
                    >
                    <div className={styles.contenedorTitulo}>
                        <h1>{tratamiento.title}</h1>
                    </div>
                </div>
            <div className={styles.detalle}>
                <p>{tratamiento.duration}</p>
                <p>{tratamiento.price} €</p>
                <p className={styles.descripcion}>{tratamiento.description}</p>
                <Link to='/reservar-online'className={styles.boton}>Reserva tu cita</Link>
            </div>
        </>    
        );
    };
    

export default MasInfo;

