import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { getDay } from "date-fns";
import styles from '../styles/ReservarOnline.module.css';
import { es } from 'date-fns/locale';

const ReservarOnline = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false);//para mostrar mensaje cuando se envía formulario
    const [startDate, setStartDate] = useState(null);
    const [services, setServices] = useState({ //datos formulario
        servicios: '',
        nombre: '',
        telefono: '',
        observaciones: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setServices({ ...services, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormularioEnviado(true); // Actualiza el estado cuando se envía el formulario
    };

    // Configuración calendario:
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    /* Filtrar las horas permitidas (10:00-14:00 y 16:00-20:00) y restringir horas pasadas
    const filterTime = (time) => {
        const now = new Date();
        const hour = time.getHours();
        const isInValidRange = hour >= 10 && hour < 20;
        const isInFuture = time > now;
        return isInValidRange && isInFuture;
    };*/

    return (
        <>
            <div className={styles.reserva}>
                <h1>Reserva tu tratamiento</h1>
            </div>

            {formularioEnviado ? (
                <p className={styles.mensajeGracias}>
                    Gracias por confiar en Tova, nos vemos muy pronto.
                </p>
            ) : (

            <div className={styles.form}>   
                <form onSubmit={handleSubmit}>
                <div className={styles.nombre}>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={services.nombre} // Cambio de setServices a services
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.telefono}>
                        <label>Teléfono:</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={services.telefono} // Cambio de setServices a services
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.observaciones}>
                        <label>Coméntanos tus dudas:</label>
                        <textarea
                            id="observaciones"
                            name="observaciones"
                            value={services.observaciones} // Cambio de setServices a services
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <DatePicker className={styles.calendario}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)} // Actualiza startDate cuando cambia la fecha
                        //showTimeSelect
                        //filterTime={filterTime} // Filtrar las horas permitidas y horas pasadas
                        dateFormat="d, MMMM , yyyy hh:mm aa"
                        //withPortal // Calendario se abre como en una pantalla
                        //timeIntervals={60} // Cada 1 hora
                        filterDate={isWeekday} // Filtra sólo de lunes a viernes
                        //timeFormat="HH:mm"
                        placeholderText="Escoge el día"
                        showIcon // Icono calendario
                        toggleCalendarOnIconClick // Y que funcione al hacer click
                        required
                        locale={es} // en español
                        calendarClassName={styles.customCalendar} //formato específico para calendar
                        />
                    </div>
                    <div >
                        <select className={styles.hora}
                            id="hora"
                            name="hora"
                            value={services.hora}
                            onChange={handleChange}
                            required>
                            <option value="">Escoge la hora</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                        </select>
                    </div>
                    <div className={styles.servicios}>
                        <select
                            id="servicios"
                            name="servicios"
                            value={services.servicios}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Escoge tu tratamiento</option>
                            <option value="Armonización facial">Armonización facial</option>
                            <option value="Acmella Oleracea">Acmella Oleracea</option>
                            <option value="Láser CO2 fraccionado">Láser CO2 fraccionado</option>
                            <option value="Limpieza Facial Detox Skin">Limpieza Facial Detox Skin</option>
                            <option value="Limpieza Facia Premium">Limpieza Facia Premium</option>
                            <option value="Láser para eliminar estrías">Láser para eliminar estrías</option>
                            <option value="Láser para eliminar varices">Láser para eliminar varices</option>
                            <option value="Imperium">Imperium</option>
                            <option value="Zionic">Zionic</option>
                        </select>
                    </div>
                    <div className={styles.contenedorBtn}>
                        <button type="submit"className={styles.boton}>Agenda tu cita</button>
                    </div>
                </form>
            </div>     
            )}
        </>
    );
};

export default ReservarOnline;


