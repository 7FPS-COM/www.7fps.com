import React from 'react';
import divisionalCupsPreset from '../../../utils/divisionalCupsPreset';
import eliteCupsPreset from '../../../utils/eliteCupsPreset';
import scoringConverter from '../../../utils/scoringConverter';
import EventWindowPointsCalculator from './components/EventWindowPointsCalculator';
import EventWindowPointSystem from './components/EventWindowPointSystem';

const EventWindowLoaded = ({windowData}) => {

    const isResult = windowData?.result ? windowData?.result : false
    if(isResult === false) return <>Not Found</>
    var scoring = windowData?.session?.rules?.scoring
    if(scoring === undefined) return <>No Scoring</>
    if(scoring.length === 0 && windowData.session.eventId.includes("DivisionalCups_Contender")) scoring = divisionalCupsPreset
    if(scoring.length === 0 && windowData.session.eventId.includes("DivisionalCups_Challenger")) scoring = divisionalCupsPreset
    if(scoring.length === 0 && windowData.session.eventId.includes("PlacementCup")) scoring = divisionalCupsPreset
    if(scoring.length === 0 && windowData.session.eventId.includes("DivisionalCups_Elite")) scoring = eliteCupsPreset

    var {placement, eliminations} = scoringConverter(scoring)

    return (
        <>
            <EventWindowPointSystem placement={placement} eliminations={eliminations}/>
            <EventWindowPointsCalculator placement={placement} eliminations={eliminations}/>
        </>
    );
};

export default EventWindowLoaded;