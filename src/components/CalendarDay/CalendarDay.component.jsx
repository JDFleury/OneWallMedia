import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({dayNumber, date, hasAvailable, isDisabled, isActive, handleClick}) => {
    return(
        <div className="calendarDayContainer">
            <div onClick={() => handleClick(date, isDisabled, date)} className={`${isDisabled ? 'isDisabled' : 'notDisabled'} ${hasAvailable ? 'hasAvailable' : 'notAvailable'} ${isActive ? 'isActive' : ''} calendarDay`}>
                {dayNumber}
            </div>
        </div>
    );
}

export default CalendarDay;