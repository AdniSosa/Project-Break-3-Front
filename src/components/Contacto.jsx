import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <nav>
          <Link to='/inicio'>INICIO</Link>
          <Link to='/tratamientos-faciales'>FACIAL</Link>
          <Link to='/tratamientos-corporales'>CORPORAL</Link>
          <Link to='/botox'>BÓTOX</Link>
          <Link to='/laser'>ESTRÍAS</Link>
          <Link to='/contacto'>CONTACTO</Link>
          <Link to='/reservar-online' >RESERVAR ONLINE</Link>
          <Link to='/regala-tova' >REGALA TOVA</Link>
        </nav>
      </div>
      <h1>Contacta con Tova, tu centro de estética</h1>
      <div>
        <h2>Visita nuestro centro en Madrid</h2>
        <p><strong>Email</strong> contacto@tova.com</p>
        <p><strong>Teléfono</strong> 654 00 00 00</p>
        <p><strong>Dirección</strong> Av. de la Industria 65, 28760 Tres Cantos-Madrid</p>
        <p><strong>Nuestro horario</strong> Lunes a Sábados de 10:00 AM a 8:00 PM</p>
      </div>
      <div>
        <h2>Envíanos un mensaje para resolver cualquier duda</h2>
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
      <div className="contact-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.099479891467!2d-3.7005327245071573!3d40.605628744121645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d5a84b923aef%3A0x170ff8e309bcdc0f!2sAv.%20de%20la%20Industria%2C%2028760%20Tres%20Cantos%2C%20Madrid!5e0!3m2!1ses!2ses!4v1744187035972!5m2!1ses!2ses" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  );
};

export default Contacto;



