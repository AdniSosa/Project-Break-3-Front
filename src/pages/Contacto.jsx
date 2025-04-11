import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.contacto}>
        <h1>Contacta con Tova</h1>
        <h2>Centro de Bienestar & Autocuidado</h2>
      </div>

      <div className={styles.contacto2}>

        <div className={styles.datos}>
          <h3 className={styles.subtitulo}>Visita nuestro centro en Madrid</h3>
            <div className={styles.mail}>
              <FontAwesomeIcon icon={faEnvelope}/>
            <span>contacto@tova.com</span>
            </div>
          
            <div className={styles.telefono}>
              <FontAwesomeIcon icon={faMobile} />
              <span>654 00 00 00</span>
            </div>         
          
            <div className={styles.direccion}>
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>Av. de la Industria 65, 28760 Tres Cantos-Madrid</span>
            </div>
          
            <div className={styles.horario}>
              <FontAwesomeIcon icon={faClock}/>
              <span>Visítanos de Lunes a Viernes de 10:00 AM a 8:00 PM</span>
            </div>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.099479891467!2d-3.7005327245071573!3d40.605628744121645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d5a84b923aef%3A0x170ff8e309bcdc0f!2sAv.%20de%20la%20Industria%2C%2028760%20Tres%20Cantos%2C%20Madrid!5e0!3m2!1ses!2ses!4v1744187035972!5m2!1ses!2ses"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div> 

      <div className={styles.form}>
        <h3 className={styles.subtitulo}>Escríbenos y resolveremos tu duda</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              placeholder="Correo electrónico"
            />
          </div>
          <div>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              placeholder="Mensaje"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      
    </>
  );
};

export default Contacto;



