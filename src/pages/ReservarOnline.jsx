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