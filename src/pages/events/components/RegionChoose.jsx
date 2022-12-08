import React from 'react';
import { NavLink } from 'react-router-dom';
import './RegionChoose.scss';

const RegionChoose = ({region}) => {
    return (
        <div className='RegionChoose__Wrapper'>
            <NavLink className={region === "EU"   ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/EU">EU</NavLink>
            <NavLink className={region === "NAE"  ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/NAE">NAE</NavLink>
            <NavLink className={region === "NAW"  ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/NAW">NAW</NavLink>
            <NavLink className={region === "ME"   ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/ME">ME</NavLink>
            <NavLink className={region === "OCE"  ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/OCE">OCE</NavLink>
            <NavLink className={region === "ASIA" ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/ASIA">ASIA</NavLink>
            <NavLink className={region === "BR"   ? "ChooseRegionLink active" : "ChooseRegionLink"} to="/events/BR">BR</NavLink>
        </div>
    );
};

export default RegionChoose;