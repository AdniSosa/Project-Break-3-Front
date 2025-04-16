import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import styles from '../styles/Appointments.module.css'


const Appointments = () => {
    const [appointments, setAppointments] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [calendarDate, setCalendarDate] = useState('')
    const [dayServices, setDayServices] = useState([]);

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
    }, [])

    const handleDate = (date) => {
        setStartDate(date);

        // Para que el día se guarde correctamente
        if (date) {
            const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
            const realDate = localDate.toISOString().split('T')[0];

            setCalendarDate(realDate)
        }
    };


    const selectDay = (dia) => {
        if (appointments) {
            //console.log(appointments)
            const todayAppointments = appointments.filter(appointment => appointment.dia === dia)

            setDayServices(todayAppointments)
        }
    }

    useEffect(() => {
        selectDay(calendarDate)
    }, [startDate])


    return (
        <>
            <div className={styles.citas}>
                <h1>Citas reservadas</h1>
            </div>

            <Calendar startDate={startDate} handleDate={handleDate} />

            {dayServices &&
                dayServices.map(services => (
                    <ul>
                        <li key={services._id}>
                            <h3>{services.dia.split('-').reverse().join('-')}</h3>
                            <p>Hora: {services.hora}</p>
                            <p>Nombre: {services.nombre}</p>
                            <p>Tratamiento: {services.servicio}</p>
                        </li>
                    </ul>
                ))
            }

            {!startDate &&

                <p>Selecciona una fecha en el calendario</p>

            }

        </>
    )
}

export default Appointments;

