import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
            <div className="treatments-list">
                <h1>Tratamientos Faciales</h1>
                {tratamientosFaciales.map((tratamientoFacial) => (
                    <div key={tratamientoFacial._id} className="service-detail">
                        <img src={tratamientoFacial.image} alt={tratamientoFacial.title} />
                        <h2>{tratamientoFacial.title}</h2>
                        <p>{tratamientoFacial.description}</p>
                        <p>Duración: {tratamientoFacial.duration}</p>
                        <p>Precio: {tratamientoFacial.price} €</p>
                        <Link to='/reservar-online'>Reserva tu cita</Link>
                        <a href={tratamientoFacial.explorer}>Más información</a>
                    </div>
                ))}
            </div>
        );
    };
    

export default TratamientosFaciales;