import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const EventById = () => {

    const [eventId, setEventId] = useState(null)

    let params = useParams();

    useEffect(() => {
        setEventId(params.event_id === undefined ? null : params.event_id)
    }, [params.event_id, setEventId])

    return (
        <div>
            <NavLink to="/events">Back</NavLink>
            {eventId}
        </div>
    );
};

export default EventById;