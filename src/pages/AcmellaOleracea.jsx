import React from 'react';
import styles from '../styles/AcmellaOleracea.module.css';
import { Link } from 'react-router-dom';

const AcmellaOleracea = () => {
  return (
    <>
      <div className={styles.titulo}>
        <h1>Acmella Oleracea</h1>
        <h2>Lifting Natural  - FACIAL</h2>
      </div>

      <div className={styles.contenedor}>
        <h3 className={styles.subtitulo}>¿Qué es y cómo funciona?</h3>
      </div>

      <div className={styles.descripcion}>
        <p>La Acmella Oleracea, también conocida como “bótox natural”, es un activo vegetal que se ha ganado un lugar destacado en la cosmética avanzada gracias a su potente acción relajante muscular y reafirmante, sin necesidad de inyecciones. Su componente activo, el spilanthol, actúa directamente sobre las microcontracciones musculares del rostro que provocan arrugas de expresión.</p>
        <p>Este tratamiento facial no invasivo utiliza una combinación de sérums concentrados de Acmella con técnicas de aplicación como masaje neurosensorial, terapia LED o radiofrecuencia de baja intensidad, permitiendo que el principio activo penetre profundamente en la piel y actúe desde dentro hacia fuera.</p>
        <p>Es ideal para personas que quieren suavizar líneas de expresión en zonas como el entrecejo, frente, contorno de ojos o labios, sin recurrir al bótox tradicional ni alterar la expresividad facial. Además de reducir arrugas, mejora la firmeza, la hidratación y aporta una luminosidad natural al rostro.</p>
        <p>El tratamiento es apto para todo tipo de piel, no tiene efectos secundarios ni necesita recuperación, por lo que es perfecto como alternativa natural, preventiva y revitalizante.</p>
      </div>

      <div className={styles.contenedor}>
        <h3 className={styles.subtitulo}>Antes y después</h3>
      </div>
      <div className={styles.contenedor}>
        <img className={styles.img} src='https://res.cloudinary.com/dljpuje5r/image/upload/v1744790224/tratamiento-belleza-antienvejecimiento_23-2149123618.jpg_tcvtzy.jpg' alt='antes y después'></img>
      </div>

      <div className={styles.contenedor}>
      <Link to='/reservar-online'className={styles.boton} >Reserva tu cita</Link>
      </div>
      </>
  );
};

export default AcmellaOleracea;