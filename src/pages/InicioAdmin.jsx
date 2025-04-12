import React from 'react';
import styles from '../styles/Inicio.module.css';
import { Link } from 'react-router-dom';

const InicioAdmin = () => {
    return (
    <>
        <div className={styles.inicio}> 
            <h1>Tova</h1>   
            <h2>Centro de Bienestar & Autocuidado</h2>
        </div> 
        <div className={styles.info}> 
            <h3 className={styles.subtitulo}>Tova Centro de estética en Madrid: Dedicadas a tí</h3>
            <p>Como bien dice su significado, Tova significa: llena de bienestar. ¡Y eso es exactamente lo que queremos que sientas con nosotros!. </p> 
            <p>En Tova estamos deseando conocerte y ofrecerte productos y tratamientos personalizados que se adapten a tus necesidades y estilo de vida.Queremos que tu inversión sea un acto de cuidado personal.</p> 
            <p>Trabajamos con productos de ingredientes naturales, y nos mantenemos en constante formación, siempre apostando por las últimas tendencias y buscando lo mejor para ti en cada detalle.</p>
            <p>Descubre un espacio donde cada detalle está pensado para que te sientas bien, cuidada y en calma. Porque tu bienestar es nuestro compromiso.</p>
        </div>
        <div className={styles.link}> 
            <Link to="/tratamientos-faciales">Ver tratamientos faciales</Link>
        </div>
        <div className={styles.link}> 
            <Link to="/tratamientos-corporales">Ver tratamientos corporales</Link>
        </div>
    </>
    );
};

export default InicioAdmin;