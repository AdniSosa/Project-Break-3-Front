import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from "date-fns";
import styles from '../styles/ReservarOnline.module.css';
import { es } from 'date-fns/locale';

const ReservarOnline = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false); // para mostrar mensaje cuando se envía el formulario
    const [startDate, setStartDate] = useState(null);
    const [appointments, setAppointments] = useState(null);
    const [date, setDate] = useState('');
    const [thisYear, setThisYear] =  useState('');
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
            setDate(realDate)
        }
    };

    // Configuración calendario:
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    const getThisYear = () => {
        const now = new Date()
        const year = now.getFullYear();
        setThisYear(year)
        //console.log(year)
    }

    const createAppointment = async (e) => {
        e.preventDefault();
        setFormularioEnviado(true); // Actualiza el estado cuando se envía el formulario

        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/appointment`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(services), 
                credentials: 'include',
            });

            if (!response.ok) throw new Error("El servicio no pudo ser creado");

            const data = await response.json();
            //console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getAppointments = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/appointment`);

            if (!response.ok) throw new Error("Reservas no encontradas");

            const data = await response.json();
            setAppointments(data)
            
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAppointments()
        getThisYear()
    }, [])

    const hourDisabled = (hora) => {

        if (appointments) {
            return appointments.some(appointment => appointment.dia === date && appointment.hora === hora)
        }
    }

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
                        holidays={[
                            { date: `${thisYear}-01-01`, holidayName: "Año Nuevo" },
                            { date: `${thisYear}-01-06`, holidayName: "Día de Reyes" },
                            { date: `${thisYear}-05-01`, holidayName: "Día del Trabajo" },
                            { date: `${thisYear}-05-02`, holidayName: "Fiesta de la Comunidad de Madrid" },
                            { date: `${thisYear}-07-25`, holidayName: "Santiago Apóstol" },
                            { date: `${thisYear}-08-15`, holidayName: "Asunción de la Virgen" },
                            { date: `${thisYear}-11-01`, holidayName: "Todos los Santos" },
                            { date: `${thisYear}-12-06`, holidayName: "Día de la Constitución Española" },
                            { date: `${thisYear}-12-08`, holidayName: "Día de la Inmaculada Concepción" },
                            { date: `${thisYear}-12-25`, holidayName: "Día de Navidad" },
                          ]}
                          excludeDates={[
                            new Date(`${thisYear}-05-01`),
                            new Date(`${thisYear}-01-06`),
                            new Date(`${thisYear}-05-01`),
                            new Date(`${thisYear}-05-02`),
                            new Date(`${thisYear}-07-25`),
                            new Date(`${thisYear}-08-15`),
                            new Date(`${thisYear}-11-01`),
                            new Date(`${thisYear}-12-06`),
                            new Date(`${thisYear}-12-08`),
                            new Date(`${thisYear}-12-25`),
                          ]}
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
                            <option value="10:00" disabled={hourDisabled('10:00')}>10:00</option>
                            <option value="11:00" disabled={hourDisabled('11:00')}>11:00</option>
                            <option value="12:00" disabled={hourDisabled('12:00')}>12:00</option>
                            <option value="13:00" disabled={hourDisabled('13:00')}>13:00</option>
                            <option value="14:00" disabled={hourDisabled('14:00')}>14:00</option>
                            <option value="16:00" disabled={hourDisabled('16:00')}>16:00</option>
                            <option value="17:00" disabled={hourDisabled('17:00')}>17:00</option>
                            <option value="18:00" disabled={hourDisabled('18:00')}>18:00</option>
                            <option value="19:00" disabled={hourDisabled('19:00')}>19:00</option>
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

