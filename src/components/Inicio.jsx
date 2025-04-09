import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
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
            <h1>Centro de Estética Tova</h1>
            <h2>Tu centro de autocuidado en Madrid</h2>
        </div>  
        <div> 
            <h3>Tova Bienestar y Autocuidado en Madrid: Tu refugio de bienestar</h3>
            <p>Como bien dice su significado, Tova significa: llena de bienestar. ¡Y eso es exactamente lo que queremos que sientas con nosotros!</p>
            <p>En Tova estamos deseando conocerte y ofrecerte productos y tratamientos personalizados que se adapten a tus necesidades y estilo de vida.Queremos que tu inversión sea un acto de cuidado personal.</p>
            <p>Trabajamos con productos de ingredientes naturales, y nos mantenemos en constante formación, siempre apostando por las últimas tendencias y buscando lo mejor para ti en cada detalle.</p>
            <img src='https://img.freepik.com/foto-gratis/productos-listos-sesion-spa_23-2151916542.jpg?ga=GA1.1.1117630890.1730399903&semt=ais_country_boost&w=740' alt='Centro-Tova' height={250} width={180}/>
            <Link to="/acerca-de-tova" >Conocer más el centro</Link>
        </div>
    </>
    );
};

export default Inicio;