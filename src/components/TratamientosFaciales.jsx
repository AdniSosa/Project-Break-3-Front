import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/TratamientosFaciales.module.css';

const TratamientosFaciales = () => {
    const [tratamientosFaciales, setTratamientosFaciales] = useState([]);
    
    const getTratamientosFaciales = async () => {
        try {
            const response = await fetch('http://localhost:3000/tratamientos-faciales');
            //const response = await fetch(`http://localhost:3000/${tratamientosFaciales}`);
            if (!response.ok) throw new Error("Tratamientos no encontrados");
            const data = await response.json();
            setTratamientosFaciales(data);
            console.log(data)

        } catch (error) {
            console.error(error.message);
        }
        };
    
        useEffect(() =>{
            getTratamientosFaciales()
        }, [])

        return (
            <>
            <div className={styles.faciales}>
                <h1>Tratamientos Faciales</h1>
            </div>
            
            <div className={styles.servicios}>
                {tratamientosFaciales.map((tratamientoFacial) => (
                    <div key={tratamientoFacial._id} className={styles.tratamiento}>
                        <img src={tratamientoFacial.image} alt={tratamientoFacial.title}className={styles.img} />
                        <a>{tratamientoFacial.title}</a>
                        <p>{tratamientoFacial.duration}</p>
                        <p>Desde {tratamientoFacial.price} €</p>
                        <Link to='/mas-info'>Más información</Link>
                        <Link to='/reservar-online'className={styles.reservar}>Reserva tu cita</Link>
                        
                    </div>
                ))}
            </div>
            </>
        );
    };
    

export default TratamientosFaciales;