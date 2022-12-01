import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/events/EventById.scss';

const EventById = (props) => {
    const {eventId} = props

    return (
        <div className={[props.className, "eventById__wrapper"].join(' ')}>
            <NavLink to="/events">Back</NavLink>
            {eventId}
        </div>
    );
};

export default EventById;