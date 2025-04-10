

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            <div className="treatments-list">
                <h1>Tratamientos Corporales</h1>
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
        );
    };
    

export default TratamientosCorporales;

