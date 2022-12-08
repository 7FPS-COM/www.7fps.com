import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './EventPoster.module.scss';

const EventPoster = ({eventData, region}) => {
    return (
        <NavLink
          to={`/events/${region}/${eventData.id}`}
          className={classes.PosterWrapper}
          style={{background: `linear-gradient(45deg, #${eventData.renderData.background_left_color}70 0%, #${eventData.renderData.background_right_color}70 100%)`}}
        >
            <img
              src={eventData.poster}
              alt={`${eventData.name_line1} ${eventData.name_line2}`}
            />
            <div className={classes.text}>
              <div className={classes.EventTitle}>
                <span className={classes.name_line1}>{eventData.name_line1}</span>
                <span className={classes.name_line2}>{eventData.name_line2}</span>
              </div>
            </div>
        </NavLink>
    );
};

export default EventPoster;