import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import getNotesList from '../../api/client/notes/getNotesList';
import NotesLeft from './components/NotesLeft';
import NotesRight from './components/NotesRight';
import {Routes, Route} from 'react-router-dom'

const NotesApp = ({setUser}) => {
    const [notes, setNotes] = useState(null)
    const [notesSettings, setNotesSettings] = useState(null)
    const [notesLoading, setNotesLoading] = useState(true)
    const [noteId, setNoteId] = useState(null)

    const [isServerConnectionError, setIsServerConnectionError] = useState(false)

    const getters = {notes, notesSettings, notesLoading, isServerConnectionError, noteId}
    const setters = {setUser, setNotes, setNotesSettings, setNotesLoading, setIsServerConnectionError, setNoteId}

    useEffect(() => {
      const promise = getNotesList()
      promise.then(result => {
        try {
          const {notes, notes_settings, user} = JSON.parse(result)
          if(user !== undefined) setUser(user)
          if(notes !== undefined) setNotes(notes)
          if(notes_settings !== undefined) setNotesSettings(notes_settings)
    
          setNotesLoading(false)
        } catch (error) {
          setNotesSettings(null)
          setNotesLoading(true)
          setIsServerConnectionError(true)
        }
      });
      promise.catch(error => {
        setNotesSettings(null)
        setNotesLoading(true)
        setIsServerConnectionError(true)
      });
    }, [setUser])

    return (
    <>
      <NotesLeft getters={getters} setters={setters}
      />
      <Routes>
          <Route path="/"         element={<NotesRight getters={getters} setters={setters} notes={notes}/>}/>
          <Route path="/:note_id" element={<NotesRight getters={getters} setters={setters} notes={notes}/>}/>
      </Routes>
    </>
    );
};

export default NotesApp;