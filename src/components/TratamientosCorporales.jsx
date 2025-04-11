

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/TratamientosCorporales.module.css';
import EditButton from './EditButton';
import useLoggedUser from "../hooks/useLoggedUser"

const TratamientosCorporales = () => {
    const {userLogged} = useLoggedUser();
    const [tratamientosCorporales, setTratamientosCorporales] = useState([]);
    
    const getTratamientosCorporales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/tratamientos-corporales`);
           // const response = await fetch(`http://localhost:3000/${tratamientosCorporales}`);
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

        return (
            <>
            <div className={styles.corporales}>
                <h1>Tratamientos Corporales</h1>
            </div>

            <div className={styles.servicios}>
                {tratamientosCorporales.map((tratamientoCorporal) => (
                    <div key={tratamientoCorporal._id} className="service-detail">
                        <img src={tratamientoCorporal.image} alt={tratamientoCorporal.title} />
                        <h2>{tratamientoCorporal.title}</h2>
                        <p>{tratamientoCorporal.description}</p>
                        <p>Duración: {tratamientoCorporal.duration}</p>
                        <p>Precio: {tratamientoCorporal.price} €</p>
                        <Link to='/reservar-online'>Reserva tu cita</Link>
                        <a href={tratamientoCorporal.explorer}>Más información</a>
                    </div>
                ))}
            </div>
            </>
        );
    };
    

export default TratamientosCorporales;

