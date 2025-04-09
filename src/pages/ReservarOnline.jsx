import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const ReservarOnline = () => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9),
        );
        const filterPassedTime = (time) => {
            const currentDate = new Date();
            const selectedDate = new Date(time);
        
            return currentDate.getTime() < selectedDate.getTime();
        };
        return (
            <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            filterTime={filterPassedTime}
            dateFormat="MMMM d, yyyy h:mm aa"
            />
    );
    };

export default ReservarOnline;

