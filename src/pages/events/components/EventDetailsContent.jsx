import React, { useEffect, useState } from 'react';
import EventWindowList from './EventDetailsContent/EventWindowList';
import EventWindow from './EventDetailsContent/EventWindow';
import getWindowUtil from '../utils/getWindowUtil';
import classes from './EventDetailsContent.module.scss';

const EventDetailsContent = ({eventWindowId, eventData}) => {
    const [windowLoading, setWindowLoading] = useState(true)
    const [windowResponse, setWindowResponse] = useState(null)
    const [isServerConnectionError, setIsServerConnectionError] = useState(false)
    const [windowList, setWindowList] = useState(null)

    const getters = {eventWindowId, windowLoading, isServerConnectionError, windowResponse}
    // const setters = {setWindowLoading, setWindowResponse, setIsServerConnectionError}

    useEffect(() => {
      if(eventWindowId === null) {
        setWindowResponse(null)
        return
      }
      getWindowUtil({setWindowResponse, setWindowLoading, setIsServerConnectionError, eventWindowId})
    }, [eventWindowId])

    useEffect(() => {
      if(eventData === undefined || eventData === null) return false
      const sorted = eventData.windows.sort(function(a, b) {
        return new Date(a.beginTime) - new Date(b.beginTime)
      });
      setWindowList(sorted)
    }, [eventData])

    return (
        <div className={classes.Wrapper}>
            <EventWindowList eventData={eventData} windowList={windowList} windowLoading={windowLoading}/>
            <EventWindow getters={getters}/>
        </div>
    )
};

export default EventDetailsContent;