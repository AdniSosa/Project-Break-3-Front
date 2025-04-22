import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/TratamientosFaciales.module.css';
import EditButton from '../components/EditButton';
import DeleteButton from '../components/DeleteButton';
import useLoggedUser from "../hooks/useLoggedUser"

const TratamientosFaciales = () => {
    const {userLogged} = useLoggedUser();
    const [tratamientosFaciales, setTratamientosFaciales] = useState([]);
    const [deletedService, setDeletedService] = useState('');
    
    const getTratamientosFaciales = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/tratamientos-faciales`);
            
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

        useEffect(() =>{
                    setTimeout(() => {
                        getTratamientosFaciales();
                        setDeletedService('')
                    }, 2000);
                }, [deletedService])

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
                        <p>Desde {tratamientoFacial.price} € /sesión</p>
                        
                        
                        {!userLogged ? <Link to='/reservar-online'className={styles.reserva}>Reserva tu cita</Link> : <EditButton id={tratamientoFacial._id} />}
                        {!userLogged ? <Link to={`/tratamientos-faciales/mas-info/id/${tratamientoFacial._id}`} className={styles.boton}>Más información</Link> : <DeleteButton id={tratamientoFacial._id} setDeletedService={setDeletedService} deletedService={deletedService} treatment={'tratamientos-faciales'}/>}
                    </div>
                ))}
                {deletedService && <p>{deletedService}</p>}
            </div>
            </>
        );
    };
    

export default TratamientosFaciales;

