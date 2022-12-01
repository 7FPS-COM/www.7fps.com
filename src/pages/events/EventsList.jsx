import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import getEvents from '../../api/fortnite/getEvents';
import EventBlockElement from './components/EventBlockElement';
import Loading from '../../components/Loading/Loading';
import '../../scss/events/EventsList.scss';
import EventById from './EventById';
import { useParams } from 'react-router-dom';

const EventsList = () => {
    const [isServerConnectionError, setIsServerConnectionError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [response, setResponse] = useState(null)
    const [events, setEvents] = useState(null)


    const [eventId, setEventId] = useState(null)

    let params = useParams();

    useEffect(() => {
        setEventId(params.event_id === undefined ? null : params.event_id)
    }, [params.event_id, setEventId])

    useEffect(() => {
        setIsLoading(true)

        const promise = getEvents('EU', 'en', 21)
        promise.then(result => {
          try {
            setResponse(JSON.parse(result))
            setIsLoading(false)
          } catch (error) {
            setIsServerConnectionError(true)
          }
        });
        promise.catch(error => {
          setIsServerConnectionError(true)
        });
    },[])

    useEffect(() => {
        if(response === null) return
        if(response.result === false) setIsServerConnectionError(true)
        if(response.events === undefined) return
        setEvents(response.events)
    }, [response])

    return (
      <>
        <div className='EventsList__wrapper'>
            {isLoading ?         <Loading isServerConnectionError={isServerConnectionError}/> : 
            events === null ?    <Loading isServerConnectionError={isServerConnectionError}/> : 
            <div className='EventsList__wrapper_inner'>
              {events.map(event => (<EventBlockElement event={event} key={event.id}/>))}
            </div>
            }
        </div>
        <EventById className={eventId === null ? "event_hidden" : "event_visible"} eventId={eventId}/>
      </>
    );
};

export default EventsList;