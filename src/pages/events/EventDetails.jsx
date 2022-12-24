import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './scss/EventDetails.module.scss';
import setTitle from '../../utils/setTitle';
import EventDetailsContent from './components/EventDetailsContent';
// import EventDetailsContent from './components/EventDetailsContent';

const EventDetails = ({eventsResponse, eventId, eventWindowId}) => {
    const [eventData, setEventData] = useState(null)

    useEffect(() => {
        if(eventsResponse === null) return setEventData(null)
        const tempEventData = eventsResponse.events.filter(e => e.id === eventId)[0]
        if(tempEventData === undefined) return
        setEventData(tempEventData)
        setTitle(["Events - ", tempEventData.name_line1, tempEventData.name_line2, `(${tempEventData.region})`].join(" "))
    }, [eventsResponse, eventId, setEventData])

    if(eventId === null) return (
        <div className={[classes.Wrapper, classes.Hide].join(" ")}>
            
        </div>
    )
    if(eventData !== null) return (
        <div className={[classes.Wrapper, classes.Show].join(" ")}>
            <div className={classes.InnerWrapper}>
                <div className={classes.Header} style={{backgroundImage: `url('${eventData.tileImage}')`}}>
                    <div className={classes.HeaderBlocks}>
                        <h1>{[eventData.name_line1, eventData.name_line2, `(${eventData.region})`].join(" ")}</h1>
                        <p className={classes.long_description}>{eventData.long_description}</p>
                        <div className={classes.BackButtonBlock}>
                        <NavLink
                          to={`/events/${eventData.region}`}
                          className={classes.BackButton}
                        >← Events
                        </NavLink>
                        </div>
                    </div>
                </div>
                <div className={classes.Content}>
                    <div className={classes.ContentInnerWrapper}>
                        <EventDetailsContent eventData={eventData} eventWindowId={eventWindowId}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EventDetails;