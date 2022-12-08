import React from 'react';
import classes from './scss/EventWindow.module.scss';

const EventWindow = ({eventWindowId}) => {
    return (
        <div className={[classes.Wrapper, eventWindowId === null ? classes.Hide : ""].join(" ")}>
            {eventWindowId}
        </div>
    );
};

export default EventWindow;