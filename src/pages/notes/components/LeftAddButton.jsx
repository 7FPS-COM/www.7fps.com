import React from 'react';
import addNote from '../../../api/client/notes/addNote';

const LeftAddButton = ({setters, getters}) => {
    const {setNotes, setUser, setNotesSettings, setNotesLoading, setIsServerConnectionError} = setters
    const {notesLoading} = getters

    function clickHandler() {
      setNotesLoading(true)
      const promise = addNote()
      promise.then(result => {
        try {
          const {notes, notes_settings, user} = JSON.parse(result)
          if(user !== undefined) setUser(user)
          if(notes !== undefined) setNotes(notes)
          if(notes_settings !== undefined) setNotesSettings(notes_settings)
    
          setNotesLoading(false)
        } catch (error) {
          setNotesLoading(true)
          setIsServerConnectionError(true)
        }
      });
      promise.catch(error => {
        setNotesLoading(true)
        setIsServerConnectionError(true)
      });
    }

    return (
        <button disabled={notesLoading} className='notepad_list__head__add' onClick={clickHandler}>
            +
        </button>
    );
};

export default LeftAddButton;