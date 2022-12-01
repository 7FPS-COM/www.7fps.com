import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import EventsList from './EventsList';

const EventsPage = () => {

    return (
        <ModalWindow>
            <Routes>
                <Route path="/"         element={<EventsList/>}/>
                <Route path="/:event_id" element={<EventsList/>}/>
            </Routes>
        </ModalWindow>
    );
};

export default EventsPage;