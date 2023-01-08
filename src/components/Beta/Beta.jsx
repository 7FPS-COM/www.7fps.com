import React from 'react';
import classes from './Beta.module.scss';

const Beta = (props) => {
    return (
        <div {...props} className={classes.HazardBackground}>
            {props.children}
        </div>
    );
};

export default Beta;