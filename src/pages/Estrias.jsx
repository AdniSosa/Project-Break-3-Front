import React from 'react';
import styles from '../styles/Estrias.module.css';
import { Link } from 'react-router-dom';

const Estrias = () => {
  return (
    <>
      <div className={styles.titulo}>
        <h1>Estrías</h1>
        <h2>Dile adiós a las marcas</h2>
      </div>

      <div className={styles.contenedor}>
        <h3 className={styles.subtitulo}>¿Qué es y cómo funciona?</h3>
      </div>

      <div className={styles.descripcion}>
        <p>Las estrías son marcas visibles que aparecen cuando la piel se estira rápidamente, ya sea por cambios hormonales, embarazo, aumento de peso o crecimiento. Aunque son comunes, muchas personas desean atenuarlas y mejorar la textura de su piel.</p>
        <p>En Tova, abordamos su tratamiento de forma personalizada y progresiva, adaptándolo al tipo y fase de cada estría. Combinamos técnicas avanzadas como el microneedling, el peeling químico suave, la radiofrecuencia fraccionada o el láser no ablativo, con principios activos como el ácido hialurónico, el retinol o la centella asiática, conocidos por su capacidad regeneradora y reparadora.</p>
        <p>Estas combinaciones estimulan la producción natural de colágeno, mejoran la elasticidad y favorecen la renovación celular, ayudando a que la piel recupere una textura más firme, uniforme y visiblemente mejorada.</p>
        <p>Es un tratamiento no invasivo, que no requiere tiempo de recuperación y que puede integrarse fácilmente en tu rutina de cuidado personal.</p>
      </div>

      <div className={styles.contenedor}>
      <Link to='/reservar-online'className={styles.boton} >Reserva tu cita</Link>
      </div>
      </>
  );
};

export default Estrias;