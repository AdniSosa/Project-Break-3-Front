import { useState, useEffect } from "react";
import { getDay } from "date-fns";
import DatePicker from 'react-datepicker';
import { es } from 'date-fns/locale';
import styles from '../styles/ReservarOnline.module.css';

const Calendar = ({startDate, handleDate}) => {
    const [thisYear, setThisYear] =  useState('');

    // Configuración calendario:
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };

    //Actualiza el año de las fechas de los festivos
    const getThisYear = () => {
        const now = new Date()
        const year = now.getFullYear();
        setThisYear(year)
        //console.log(year)
    }

    useEffect(() => {
        getThisYear()
    }, [])

    return (

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
    )
}

export default Calendar;