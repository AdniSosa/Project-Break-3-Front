import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from "date-fns";
import styles from '../styles/ReservarOnline.module.css';
import { es } from 'date-fns/locale';

const ReservarOnline = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false); // para mostrar mensaje cuando se envía el formulario
    const [startDate, setStartDate] = useState(null);
    const [services, setServices] = useState({
        dia: startDate,
        hora: '',
        servicio: '',
        nombre: '',
        telefono: '',
        observaciones: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setServices({ ...services, [name]: value });
    };

    const handleDate = (date) => {
        setStartDate(date);

        // Para que el día se guarde correctamente
        if (date) {
            const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
            const realDate = localDate.toISOString().split('T')[0];

            setServices({ ...services, dia: realDate });
        }
    };

    // Configuración calendario:
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    const createAppointment = async (e) => {
        e.preventDefault();
        setFormularioEnviado(true); // Actualiza el estado cuando se envía el formulario

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/appointment`, {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(services), // Convertimos el payload de JS a JSON
                credentials: 'include',
            });

            if (!response.ok) throw new Error("El servicio no pudo ser creado");

            const data = await response.json();
            console.log(data); // Puedes ajustar este `console.log` para mostrar el mensaje o el resultado que desees
        } catch (error) {
            console.error(error);
        }
    };

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
                    <form onSubmit={createAppointment}>
                        <div className={styles.nombre}>
                            <label htmlFor='nombre'>Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={services.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.telefono}>
                            <label htmlFor='telefono'>Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                minLength="9"
                                value={services.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.observaciones}>
                            <label htmlFor='observaciones'>Coméntanos tus dudas:</label>
                            <textarea
                                id="observaciones"
                                name="observaciones"
                                value={services.observaciones}
                                onChange={handleChange}
                            />
                        </div>

                        <DatePicker
                            className={styles.calendario}
                            selected={startDate}
                            onChange={handleDate} // Actualiza startDate cuando cambia la fecha
                            dateFormat="d, MMMM , yyyy"
                            filterDate={isWeekday} // Filtra solo de lunes a viernes
                            placeholderText="Escoge el día"
                            showIcon//muestra icono calendario
                            toggleCalendarOnIconClick
                            required
                            locale={es} // en español
                            calendarClassName={styles.customCalendar}
                        />

                        <div>
                            <select
                                className={styles.hora}
                                id="hora"
                                name="hora"
                                value={services.hora}
                                onChange={handleChange}
                                required
                            >
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
                                name="servicio"
                                value={services.servicio}
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
                            <button type="submit" className={styles.boton}>Agenda tu cita</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ReservarOnline;

