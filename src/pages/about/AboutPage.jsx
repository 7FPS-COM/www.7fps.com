import React, { useEffect } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';
import classes from './scss/AboutPage.module.scss';
import './scss/AboutPage.scss';

const AboutPage = () => {
    useEffect(() => {
        setTitle("About")
    },[])

    return (
        <ModalWindow>
            <div className={classes.Wrapper}>
                <section className={classes.Section1}>
                    <div className={[classes.Section1InnerWrapper, 'Section1InnerWrapper'].join(' ')}>
                        <div className={classes.Heading}>
                            <h1 className={classes.Title}>Tools for <span className={classes.Gamers}>Gamers</span> <br/>by <span className={classes.Gamers}>Gamers</span></h1>
                            <p>Useful tools for Fortnite Competitive players</p>
                        </div>
                    </div>
                </section>
            </div>
        </ModalWindow>
    );
};

export default AboutPage;