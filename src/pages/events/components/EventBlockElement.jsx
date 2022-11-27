import React from 'react';
import { NavLink } from 'react-router-dom';

const EventBlockElement = ({event}) => {
    return (
        <NavLink to={`/events/${event.id}`} className='EventBlockElement'>
            <img className='event_poster_image' alt={event.id} src={event.poster} style={{backgroundColor: `#${event.renderData.poster_fade_color}`}}/>
            <div className='event_title'>
                <span className='event_name_line1'>{event.name_line1}</span>
                <span className='event_name_line2'>{event.name_line2}</span>
                <span className='event_schedule'>{event.schedule}</span>
            </div>
        </NavLink>
    );
};

export default EventBlockElement;