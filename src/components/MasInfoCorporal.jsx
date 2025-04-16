import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import styles from '../styles/MasInfo.module.css';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import useLoggedUser from "../hooks/useLoggedUser"

const MasInfoCorporal = () => {
    const {userLogged} = useLoggedUser();
    const [deletedService, setDeletedService] = useState('');
    const [tratamiento, setTratamiento] = useState(null);
    const { _id } = useParams();
    
    
    const getMasInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/tratamientos-corporales/mas-info/id/${_id}`)
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

        useEffect(() =>{
            setTimeout(() => {
                getMasInfo();
                setDeletedService('')
            }, 2000);
        }, [deletedService])

        if (!tratamiento) return <p>Cargando tratamiento...</p>;

        return (
            <>
            <div className={styles.fondo}
                style={{
                backgroundImage: `linear-gradient(rgba(246, 233, 217, 0.5), rgba(248, 230, 210, 0.5)),url(${tratamiento.image})`,
                
                }}>
                <h1>{tratamiento.title}</h1>
            </div>
            <div className={styles.detalle}>
                <p>{tratamiento.duration}</p>
                <p>{tratamiento.price} €</p>
                <p className={styles.descripcion}>{tratamiento.description}</p>
                <Link to='/reservar-online'className={styles.boton}>Reserva tu cita</Link>
                    
                {deletedService && <p>{deletedService}</p>}
            </div>
        </>    
        );
    };
    

export default MasInfoCorporal;

