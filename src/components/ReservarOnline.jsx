import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const ReservarOnline = () => {
        const [selectedDate, setSelectedDate] = useState(new Date());
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
            <div>
                <h1>Reservar Online</h1>
                <DatePicker
                showIcon
                toggleCalendarOnIconClick
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
            />
            </div>
            </>
        );
    };
    

export default ReservarOnline;