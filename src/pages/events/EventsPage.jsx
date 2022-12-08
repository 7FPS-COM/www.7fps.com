import React from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';
import EventsList from './EventsApp';

const EventsPage = () => {
    useEffect(() => {
        setTitle("Events")
    },[])

    return (
        <ModalWindow>
            <Routes>
                <Route path="/"         element={<EventsList/>}/>
                <Route path="/:region" element={<EventsList/>}/>
                <Route path="/:region/:event_id" element={<EventsList/>}/>
                <Route path="/:region/:event_id/:window_id" element={<EventsList/>}/>
            </Routes>
        </ModalWindow>
    );
};

export default EventsPage;