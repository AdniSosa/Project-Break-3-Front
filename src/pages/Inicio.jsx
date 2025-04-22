import React from 'react';
import styles from '../styles/Inicio.module.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
    <>
        <div className={styles.inicio}> 
            <h1>Tova</h1>   
            <h2>Centro de Bienestar & Autocuidado</h2>
        </div> 
        <div className={styles.info}> 
            <h3 className={styles.subtitulo}>Tova Centro de estética en Madrid: Dedicadas a tí</h3>
            <p>Como bien dice su significado, Tova significa: llena de bienestar. ¡Y eso es exactamente lo que queremos que sientas con nosotros!. </p> 
            <p>En Tova estamos deseando conocerte y ofrecerte productos y tratamientos personalizados que se adapten a tus necesidades y estilo de vida. Queremos que tu inversión sea un acto de cuidado personal.</p> 
            <p>Trabajamos con productos de ingredientes naturales, y nos mantenemos en constante formación, siempre apostando por las últimas tendencias y buscando lo mejor para ti en cada detalle.</p>
            <p>Descubre un espacio donde cada detalle está pensado para que te sientas bien, cuidada y en calma. Porque tu bienestar es nuestro compromiso.</p>
        </div>
        
        <div className={styles.tratamientos}> 
            <div className={styles.link}> 
                <img className={styles.img} src='https://res.cloudinary.com/dljpuje5r/image/upload/v1744534544/mujer-joven-mascara-cara-relajante-salon-spa_176420-7497.jpg_jxqp8w.jpg'></img>
                <Link className={styles.clase} to="/tratamientos-faciales">Ver tratamientos faciales</Link>
            </div>
            <div className={styles.link}> 
                <img className={styles.img} src='https://res.cloudinary.com/dljpuje5r/image/upload/v1744534526/concepto-spa-mujer-vista-cerca_23-2147816923.jpg_seld8e.jpg'></img>
                <Link className={styles.clase} to="/tratamientos-corporales">Ver tratamientos corporales</Link>
            </div>
        </div>
        
        <h3 className={styles.pregunta}>¿Quién hay detrás del Centro de Estética Tova?</h3>
        <div className={styles.sobreMi}> 
            <img className={styles.imgsobremi} src='https://res.cloudinary.com/dljpuje5r/image/upload/v1744713850/mujer-cosmetologa-haciendo-procedimientos-belleza_1303-26013.jpg_mzwcke.jpg' alt='sobremi'></img>

            <div className={styles.explicacion}>     
                <h3 className={styles.saludo}>¡Hola!</h3>
                <p className={styles.carta}>Me llamo Daniela, y hace 15 años empecé a soñar con lo que hoy es Tova.</p>
                <p className={styles.carta}>Desde siempre me ha apasionado la estética y el bienestar. Me formé profesionalmente y, con cada experiencia, fui construyendo la visión que hoy guía mi trabajo.</p>
                <p className={styles.carta}>Lo que comenzó como un sueño, hoy es un compromiso: ofrecer un espacio donde cuidarte, escucharte y hacerte sentir bien.</p>
                <p className={styles.carta}>Así nació Tova, en marzo de 2010, en Tres Cantos, Madrid.</p>
                <p className={styles.carta}>Un refugio de autocuidado para mujeres que quieren verse y sentirse bien, por dentro y por fuera.</p>
                <p className={styles.carta}>Gracias por estar aquí.</p>
            </div>
        </div>    
    </>
    );
};

export default Inicio;