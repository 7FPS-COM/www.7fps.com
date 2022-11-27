import React from 'react';
import classes from './Loading.module.scss'
import Spinner from './Spinner';

const Loading = (props) => {
    const fullscreen = props.fullscreen === undefined ? false : props.fullscreen
    const serverIsNotResponding = props.isServerConnectionError === undefined ? false : props.isServerConnectionError
    const flex = props.flex === undefined ? false : true

    return (
        <div className={
            [
                classes.Wrapper,
                fullscreen ? classes.Fullscreen : '',
                flex ? classes.FlexGrow : classes.WidthHeight100
            ].join(' ')}>
            {
                !serverIsNotResponding ? <Spinner/> :
                <><h2 style={{marginTop: 50}}>Server is not responding</h2>
                <button className='button' style={{marginTop: 15}} onClick={() => window.location.reload()}>Refresh Page</button></>
            }
            
        </div>
    );
};

export default Loading;