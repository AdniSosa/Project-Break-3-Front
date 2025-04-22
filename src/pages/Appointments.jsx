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
            todayAppointments.sort((a, b) => a.hora.localeCompare(b.hora))
            setDayServices(todayAppointments)
        }
    }

    useEffect(() => {
        selectDay(calendarDate)
    }, [startDate])

    const appointmentsDates = appointments
    ? appointments.map(a => new Date(a.dia))
    : []

    /* const changeDate = (date, button) => {
        const selectedDate = new Date(date)
        let day = selectedDate.getDate();
        let month = selectedDate.getMonth() + 1;
        let year = selectedDate.getFullYear();

        if (day < 1 && month === ('0', '2', '4')) {
            day = 30;
            month = selectedDate.getMonth() + 1;
            console.log(day)

        } else if (button === '+') {
            day = selectedDate.getDate() + 1;
        } else if (button === '-') {
            day = selectedDate.getDate() - 1;

        }

       
        const newDate = year + '-' + month + '-' + day
        setCalendarDate(newDate)
        console.log(day)

    } */


    return (
        <>
            <header className={styles.citas}>
                <h1>Citas reservadas</h1>
            </header>

            <section className={styles.calendar}>
                {/* <button onClick={() => changeDate(calendarDate, '-')}>atrás</button> */}
                <Calendar startDate={startDate} handleDate={handleDate} appointments={appointmentsDates}/>
                {/* <button onClick={() => changeDate(calendarDate, '+')}>delante</button> */}
            </section>
            <section className={styles.dates}>
                {dayServices &&
                    dayServices.map(services => (
                        <ul>
                            <li key={services._id}>
                                <h3>{services.dia.split('-').reverse().join('-')}</h3>
                                <p><strong>Hora: </strong>{services.hora}</p>
                                <p><strong>Nombre: </strong>{services.nombre}</p>
                                <p><strong>Tratamiento: </strong>{services.servicio}</p>
                            </li>
                        </ul>
                    ))
                }

                {!startDate &&

                    <p>Selecciona una fecha en el calendario</p>

                }
            </section>
        </>
    )
}

export default Appointments;

