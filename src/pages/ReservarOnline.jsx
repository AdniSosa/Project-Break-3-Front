import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import {getDay} from "date-fns";


const ReservarOnline = () => {
    const [startDate, setStartDate] = useState(null);
    const [services, setServices]=useState({
            servicios:'',
            nombre:'',
            telefono:'',
            observaciones:'',
        });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setServices({ ...services, [name]: value });
    };
            
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    //configuración calendario:
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6;
    };


    // Filtrar las horas permitidas (10:00-14:00 y 16:00-20:00) y restringir horas pasadas
    const filterTime = (time) => {
        const now = new Date();
        const hour = time.getHours();
        const isInValidRange = (hour >= 10 && hour < 14) || (hour >= 16 && hour < 20);
        const isInFuture = time > now;
        return isInValidRange && isInFuture;
    };

    return (
        <>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        filterTime={filterTime} //Filtrar las horas permitidas y horas pasadas
        dateFormat="d, MMMM , yyyy hh:mm aa"
        withPortal // calendario se abre como en una pantalla
        timeIntervals={60} // cada 1 hora
        filterDate={isWeekday} //filtra sólo de lunes a viernes 
        timeFormat="HH:mm"
        placeholderText="Escoge tu cita"
        showIcon//icono calendario
        toggleCalendarOnIconClick//y que funcione al hacer click
        //excludeTimes={} //bloquear citas agendadas
        required
        
        />
        <form onSubmit={handleSubmit}>
            <div>
                <select
                id="servicios"
                name="servicios"
                value={setServices.servicios}
                onChange={handleChange}
                required>
                    <option value="">Escoge tu tratamiento</option>
                    <option value="">Armonización facial</option>
                    <option value="">Bótox</option>
                    <option value="">Láser CO2 fraccionado</option>
                    <option value="">Limpieza Facial Detox Skin</option>
                    <option value="">Limpieza Facia Premium</option>
                    <option value="">Láser para eliminar estrías</option>
                    <option value="">Láser para eliminar varices</option>
                    <option value="">Imperium</option>
                    <option value="">Zionic</option>
                </select>
            </div>
            <div>
                <label>Nombre:</label>
                <input
                type='text'
                id='nombre'
                name='nombre'
                value={setServices.nombre}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input 
                type= 'tel'
                id='telefono'
                name='telefono'
                value={setServices.telefono}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Observaciones;</label>
                <textarea
                id="observaciones"
                name="observaciones"
                value={setServices.observaciones}
                onChange={handleChange}
                />
                <a>Coméntanos cualquier duda</a>
            </div>
            
            <button type="submit">Agenda tu cita</button>
            </form>
        </>
    );
};

export default ReservarOnline;


