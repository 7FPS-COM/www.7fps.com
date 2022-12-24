import React from 'react';
import Loading from '../../../../components/Loading/Loading';
import { NavLink } from 'react-router-dom';
import classes from "./EventWindowList.module.scss";
import eventRegEx from '../../utils/eventRegEx';
import roundRegEx from '../../utils/roundRegEx';
import weekRegEx from '../../utils/weekRegEx';
import './EventWindowList.scss';

const EventWindowList = ({windowList, eventData, windowLoading}) => {
    if(windowList === null || windowList === undefined || eventData === null || eventData === undefined) return (
        <Loading/>
    )

    function windowTitle(e) {
        const session = eventRegEx(e.windowId) 
        const round = roundRegEx(e.windowId)
        const week = weekRegEx(e.windowId)
        const windowName = []
        if(session !== null) windowName.push(`Session ${session}`)
        if(round !== null) windowName.push(`Round ${round}`)
        if(week !== null) windowName.push(`Week ${week}`)
        if(windowName.length === 0) return `Event ${new Date(e.beginTime).getFullYear()}`
        return windowName.join(" ")
    }

    function dateFormatted(e) {
        const date = new Date(e)

        return ('0' + date.getDate()).slice(-2) + '.'
        + ('0' + (date.getMonth()+1)).slice(-2) + '.'
        + date.getFullYear();
    }

    function timeFormatted(e) {
        const date = new Date(e)

        return ('0' + date.getHours()).slice(-2) + ':'
        + ('0' + (date.getMinutes())).slice(-2);
    }

    return (
        <div className={classes.Wrapper}>
            {windowList.map(e => (
                <NavLink
                    key={e.windowId}
                    className={[
                        classes.Link,
                        new Date(e.endTime) < new Date() ? classes.Past : 
                            new Date(e.endTime) > new Date() > new Date(e.beginTime) ? classes.Live : "",
                        "Xe21eCEvSONBULmlzc6AS"
                    ].join(" ")}
                    to={`/events/${eventData.region}/${eventData.id}/${e.windowId}`}
                >
                    <span className={classes.WindowTitle}>{windowTitle(e)}</span>
                    <span className={classes.WindowDate}>{dateFormatted(e.beginTime)}</span>
                    <span className={classes.WindowTime}>{timeFormatted(e.beginTime)} - {timeFormatted(e.endTime)}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default EventWindowList;