import React from 'react';
import { DragSizing } from 'react-drag-sizing'
import { NavLink } from 'react-router-dom'
import Loading from '../../../components/Loading/Loading';
import LeftAddButton from './LeftAddButton';
import LeftDeleteButton from './LeftDeleteButton';


const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
}

const NotesLeft = ({setters, getters}) => {

    const {notes, notesLoading, isServerConnectionError} = getters

    return (
        <DragSizing
            border='right'
            className='notepad_list'
            handlerClassName='notepad_handler'
            handlerWidth={5}
        >
            <div className='notepad_list__head'>
                <input disabled={notesLoading} type={'text'} placeholder={'Serach...'} className='notepad_list__head__search'/>
                <LeftAddButton setters={setters} disabled={notesLoading}/>
            </div>
            <div className='notepad_list__list'>
                {notesLoading ? <Loading  isServerConnectionError={isServerConnectionError}/> : notes.map(note => (
                    <NavLink className='notepad_list__list__element' key={note.note_id} to={`/notes/${note.note_id}`}>
                        <div className='notepad_list__left'><div className='notepad_list__element_title'>{note.title}</div>
                        <div className='notepad_list__element_date'>{formatDate(note.last_update)}</div>
                        </div>
                        <div className='notepad_list__options_btn'><LeftDeleteButton note={note} setters={setters} getters={getters}/></div>
                    </NavLink>
                ))}
            </div>
        </DragSizing>
    );
};

export default NotesLeft;