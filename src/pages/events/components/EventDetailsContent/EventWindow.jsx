import React from 'react';
import Loading from '../../../../components/Loading/Loading';
import classes from './EventWindow.module.scss';
import EventWindowLoaded from './EventWindow/EventWindowLoaded';

const EventWindow = ({getters}) => {
    const {eventWindowId, windowLoading, isServerConnectionError, windowResponse} = getters;

    if(eventWindowId === null) return (
        <div className={[classes.Wrapper, classes.Show].join(" ")}>
            Choose event window
        </div>
    )
    if(windowLoading === true) return (
        <div className={[classes.Wrapper, classes.Show].join(" ")}>
            <Loading isServerConnectionError={isServerConnectionError}/>
        </div>
    )
    if(windowLoading === false && isServerConnectionError === true) return (
        <div className={[classes.Wrapper, classes.Show].join(" ")}>
            Error
        </div>
    )
    if(windowLoading === false && windowResponse !== null) return (
        <div className={[classes.Wrapper, classes.Show].join(" ")}>
            <EventWindowLoaded windowData={windowResponse}/>
        </div>
    )   
};

export default EventWindow;