import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './EventWindowPointsCalculator.module.scss';

const EventWindowPointsCalculator = ({placement, eliminations}) => {
    const [currentPoints, setCurrentPoints] = useState(0)
    const [goalPoints, setGoalPoints] = useState(0)
    const [calculatedText, setCalculatedText] = useState([])

    useEffect(() => {
        if(currentPoints < 0 || goalPoints <= 0) return setCalculatedText("Current amount of points must be equal or greater than 0\nGoal amount of points must be greater than 0")
        if(currentPoints > goalPoints) return setCalculatedText("Goal amount of points can't be less than current")

        let result = []
        let pointsRequired = goalPoints - currentPoints

        for(let i = 0; i < placement.length; i++) {
            const element = placement[i]
            // cumulative
            let eliminationsPointsRequired = pointsRequired - element.cumulative
            let eliminationsRequired = Math.ceil(eliminationsPointsRequired / eliminations)
            if(eliminationsRequired < 0) eliminationsRequired = 0

            result.push(`Top ${element.top} and ${eliminationsRequired} eliminations`)
        }

        return setCalculatedText(result.join("\n"))
    },[currentPoints, goalPoints, placement, eliminations])

    function pointsSetter(e) {
        let value = parseInt(e.target.value)
        if(isNaN(value)) value = 0
        if(e.target.id === "currentPoints") {
            setCurrentPoints(value)
        }
        if(e.target.id === "goalPoints") {
            setGoalPoints(value)
        }
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Description}>
                <h2>Points calculator</h2>
                <p>Here you can calculate what place do you need to take and how many eliminations you need to do to get required amount of points in your last game</p>
            </div>

            <div className={classes.Settings}>
                <label htmlFor="currentPoints">Current amount of points:</label>
                <input type="number" id="currentPoints" name="currentPoints" value={currentPoints} onChange={(e) => pointsSetter(e)}/>
        
                <label htmlFor="goalPoints">Goal amount of points:</label>
                <input type="number" id="goalPoints" name="goalPoints" value={goalPoints} onChange={(e) => pointsSetter(e)}/>
            </div>

            <div className={classes.Result}>
                <textarea className={classes.Result} readOnly={true} value={calculatedText} onClick={(e) => e.target.select()}/>
            </div>
        </div>
    );
};

export default EventWindowPointsCalculator;