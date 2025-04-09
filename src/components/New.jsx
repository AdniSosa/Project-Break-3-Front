import React from 'react';
import { Link } from 'react-router-dom';

const New = () => {
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
                <Link to='/pide-cita' >RESERVAR ONLINE</Link>
                <Link to='/regala-tova' >REGALA TOVA</Link>
            </nav>
        </div>
        <div>
            <h1>Subir nuevo servicio</h1>
            <p></p>
        </div>
        </>
    );
};

export default New;