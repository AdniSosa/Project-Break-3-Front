import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from "date-fns";
import styles from '../styles/ReservarOnline.module.css';
import { es } from 'date-fns/locale';
import Calendar from '../components/Calendar';

const ReservarOnline = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false); // para mostrar mensaje cuando se envía el formulario
    const [startDate, setStartDate] = useState(null);
    const [appointments, setAppointments] = useState(null);
    const [date, setDate] = useState('');
    const [services, setServices] = useState({
        dia: '',
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
            //realDate = realDate.split('-').reverse().join('-')

            setServices({ ...services, dia: realDate });
            setDate(realDate)
        }
    };

    //Para guardar la reserva en la base de datos.
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

            if (!response.ok) throw new Error("La reserva no pudo ser guardada");

            const data = await response.json();
            //console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    //Traigo todas las reservas para poder bloquear las horas ya reservadas
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
        //getThisYear()
    }, [])

    //Me devuelve true si existe el día en las reservas guardadas y la hora que se pone en el argumento.
    //Si es true me inhabilita la hora.
    const hourDisabled = (hora) => {
        if (appointments) {
            return appointments.some(appointment => appointment.dia === date && appointment.hora === hora)
        }
    }

    return (
        <>
            <div className={styles.reserva}>
                <h1>Reserva Tova</h1>
                <h2>Centro de Bienestar & Autocuidado</h2>
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

                        <Calendar startDate={startDate} handleDate={handleDate}/>
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
                                <option value="Terapia Facial Revitaluxe">Terapia Facial Revitaluxe</option>
                                <option value="Luminova - Fotoregeneración Avanzada">Luminova - Fotoregeneración Avanzada</option>
                                <option value="Limpieza Facial PureGlow">Limpieza Facial PureGlow</option>
                                <option value="Limpieza Facial RenewUp">Limpieza Facial RenewUp</option>
                                <option value="Tratamiento Reafirmante Imperium Cell ">Tratamiento Reafirmante Imperium Cell </option>
                                <option value="Zionic Remodelación Corporal Activa">Zionic Remodelación Corporal Activa</option>
                                <option value="Tratamiento Estrías">Tratamiento Estrías</option>
                                <option value="Acmella Oleracea - Lifting Natural">Acmella Oleracea - Lifting Natural</option>
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

