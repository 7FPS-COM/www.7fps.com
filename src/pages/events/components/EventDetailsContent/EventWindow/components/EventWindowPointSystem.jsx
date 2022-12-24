import React from 'react';
import classes from './EventWindowPointSystem.module.scss';

const EventWindowPointSystem = ({placement, eliminations}) => {
    // "scoring":[
    //     {
    //      "trackedStat":"PLACEMENT_STAT_INDEX",
    //      "matchRule":"lte",
    //      "rewardTiers":[
    //          {
    //            "keyValue":1,
    //            "pointsEarned":3,
    //            "multiplicative":false
    //          },
    //          {
    //            "keyValue":2,
    //            "pointsEarned":2,
    //            "multiplicative":false
    //          },
    //          {
    //            "keyValue":3,
    //            "pointsEarned":2,
    //            "multiplicative":false
    //          },
    //      ]
    //     },
    //     {
    //      "trackedStat":"TEAM_ELIMS_STAT_INDEX",
    //      "matchRule":"gte",
    //      "rewardTiers":[
    //        {
    //         "keyValue":1,
    //         "pointsEarned":1,
    //         "multiplicative":true
    //        }
    //      ]
    // ]

    

    return (
        <div className={classes.Wrapper}>
            <h2 className={classes.Title}>Scoring</h2>
            <div className={classes.ListElement}><div className={classes.Left}>Each Elimination</div><div className={classes.Right}>+{eliminations} points</div></div>
            {placement.map(e => (
                <div key={`place${e.top}`} className={classes.ListElement}><div className={classes.Left}>Reach Top {e.top}</div><div className={classes.Right}>+{e.points} points ({e.cumulative})</div></div>
            ))}
        </div>
    );
};

export default EventWindowPointSystem;