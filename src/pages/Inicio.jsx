import React from 'react';
import styles from '../styles/Inicio.module.css';

const Inicio = () => {
    return (
    <>
        <div className={styles.inicio}> 
            <h1>Tova Bienestar y Autocuidado</h1>
            <h2>Tu refugio de bienestar en Madrid</h2>
        </div>  
        <div> 
            <p>Como bien dice su significado, Tova significa: llena de bienestar. ¡Y eso es exactamente lo que queremos que sientas con nosotros!</p>
            <p>En Tova estamos deseando conocerte y ofrecerte productos y tratamientos personalizados que se adapten a tus necesidades y estilo de vida.Queremos que tu inversión sea un acto de cuidado personal.</p>
            <p>Trabajamos con productos de ingredientes naturales, y nos mantenemos en constante formación, siempre apostando por las últimas tendencias y buscando lo mejor para ti en cada detalle.</p>
            <img src='https://img.freepik.com/foto-gratis/productos-listos-sesion-spa_23-2151916542.jpg?ga=GA1.1.1117630890.1730399903&semt=ais_country_boost&w=740' alt='Centro-Tova' height={250} width={180}/>
        </div>
    </>
    );
};

export default Inicio;