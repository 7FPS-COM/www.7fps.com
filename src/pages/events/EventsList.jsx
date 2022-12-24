import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EventPoster from './components/EventPoster';
import RegionChoose from './components/RegionChoose';
import classes from './scss/EventsList.module.scss';

const EventsList = ({eventsResponse}) => {

    const [eventsFormatted, setEventsFormatted] = useState(null)

    useEffect(() => {
        if(eventsResponse === null) return setEventsFormatted(null)
        if(eventsResponse?.result === false) return setEventsFormatted(null)
        
        let perChunk = 3;
        const result = eventsResponse.events.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
          }, [])
        
        setEventsFormatted(result)
    }, [eventsResponse])

    return (
        <div className={classes.Wrapper}>
            <RegionChoose region={eventsResponse === null ? null : eventsResponse.region}/>

            {eventsFormatted === null ? <h3 style={{textAlign: "center", marginTop: "16px"}}>Choose region to start working</h3> : 
                eventsFormatted.map((evnt, index) => 
                    <div className={classes.Row} key={`row${index}`}>
                        {evnt.map(evnt =>(<EventPoster key={evnt.id} eventData={evnt} region={evnt.region}/>))}
                    </div>)
            }
        </div>
    );
};

export default EventsList;