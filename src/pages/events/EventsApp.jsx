import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import getEventsUtil from './utils/getEvents';
import Loading from '../../components/Loading/Loading';
import EventsList from './EventsList';
import EventDetails from './EventDetails';
import classes from './scss/EventsApp.module.scss';
import setTitle from '../../utils/setTitle';

const EventsApp = () => {
  const params = useParams()

  const [region, setRegion] = useState(null)
  const [eventId, setEventId] = useState(null)
  const [eventWindowId, setEventWindowId] = useState(null)
  const [eventsResponse, setEventsResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isServerConnectionError, setIsServerConnectionError] = useState(false)

  useEffect(() => {
    const tempRegion = params.region === undefined ? null : ["EU", "NAE", "NAW", "OCE", "ME", "ASIA", "BR"].includes(params.region.toUpperCase()) ? params.region.toUpperCase() : "EU";
    setRegion(tempRegion)
    setEventId(params.event_id === undefined ? null : params.event_id)
    setEventWindowId(params.window_id === undefined ? null : params.window_id)
  }, [params.region, setRegion, params.event_id, setEventId, params.window_id, setEventWindowId])

  useEffect(() => {
    if(region === null) {
      setEventsResponse(null)
      return
    }
    getEventsUtil({
      setEventsResponse,
      setIsLoading,
      setIsServerConnectionError,
      region
    })
  }, [region])

  useEffect(() => {
    if(eventId !== null) return
    setTitle(region === null ? "Events" : `Events (${region})`)
  }, [region, eventId])

  useEffect(() => {
    // Solution for the problem:
    // - if you choose region and then quickly click Events on top of the screen
    // while event is loading we are gonna have loaded event on a page that supposed
    // to be empty
    if(region === null) setEventsResponse(null)
  }, [eventsResponse, region])

  return (
    <div className={classes.Wrapper}>
      {isLoading ? <Loading isServerConnectionError={isServerConnectionError}/> : <EventsList eventsResponse={eventsResponse}/>}
      <EventDetails eventsResponse={eventsResponse} eventId={eventId} eventWindowId={eventWindowId}/>
    </div>
  );
};

export default EventsApp;