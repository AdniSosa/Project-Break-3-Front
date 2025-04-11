

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/TratamientosCorporales.module.css';

const TratamientosCorporales = () => {
    const [tratamientosCorporales, setTratamientosCorporales] = useState([]);
    
    const getTratamientosCorporales = async () => {
        try {
            const response = await fetch('http://localhost:3000/tratamientos-corporales');
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
                    <div key={tratamientoCorporal._id}className={styles.tratamiento}>
                        <img src={tratamientoCorporal.image} alt={tratamientoCorporal.title}className={styles.img} />
                        <a>{tratamientoCorporal.title}</a>
                        <p>{tratamientoCorporal.duration}</p>
                        <p>Desde {tratamientoCorporal.price} €</p>
                        <Link to='/reservar-online'>Reserva tu cita</Link>
                        <Link to='/mas-info'>Más información</Link>
                    </div>
                ))}
            </div>
            </>
        );
    };
    

export default TratamientosCorporales;

