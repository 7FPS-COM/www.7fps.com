import React from 'react';
import classes from './scss/EventDetails.module.scss';

const EventDetails = ({eventId}) => {
    return (
        <div className={[classes.Wrapper, eventId === null ? classes.Hide : ""].join(" ")}>
            {eventId}
        </div>
    );
};

export default EventDetails;