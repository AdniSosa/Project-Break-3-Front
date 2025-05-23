import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/TratamientosCorporales.module.css';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import useLoggedUser from "../hooks/useLoggedUser"

const TratamientosCorporales = () => {
    const {userLogged} = useLoggedUser();
    const [tratamientosCorporales, setTratamientosCorporales] = useState([]);
    const [deletedService, setDeletedService] = useState('');
    
    const getTratamientosCorporales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/tratamientos-corporales`)
    
            if (!response.ok) throw new Error("Tratamientos no encontrados");
            const data = await response.json();
            setTratamientosCorporales(data);
            console.log(data)

        } catch (error) {
            console.error(error.message);
        }
        };
    
        useEffect(() =>{
            getTratamientosCorporales()
        }, [])

        useEffect(() =>{
            setTimeout(() => {
                getTratamientosCorporales();
                setDeletedService('')
            }, 2000);
        }, [deletedService])

        return (
            <>
            <div className={styles.corporales}>
                <h1>Tratamientos Corporales</h1>
            </div>

            <div className={styles.servicios}>
                {tratamientosCorporales.map((tratamientoCorporal) => (
                    <div key={tratamientoCorporal._id} className={styles.tratamiento}>
                        <img src={tratamientoCorporal.image} alt={tratamientoCorporal.title}className={styles.img} />
                        <a>{tratamientoCorporal.title}</a>
                        <p>{tratamientoCorporal.duration}</p>
                        <p>Desde {tratamientoCorporal.price} € /sesión</p>
                    
                        {!userLogged ? <Link to='/reservar-online'className={styles.reserva}>Reserva tu cita</Link> : <EditButton id={tratamientoCorporal._id} />}
                        {!userLogged ? <Link to={`/tratamientos-corporales/mas-info/id/${tratamientoCorporal._id}`} className={styles.boton}>Más información</Link> : <DeleteButton id={tratamientoCorporal._id} setDeletedService={setDeletedService} deletedService={deletedService} treatment={'tratamientos-corporales'}/>}
                    </div>
                    
                ))}
                {deletedService && <p>{deletedService}</p>}
            </div>
            </>
        );
    };
    

export default TratamientosCorporales;





