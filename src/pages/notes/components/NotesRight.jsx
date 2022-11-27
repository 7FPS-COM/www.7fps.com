import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import getNote from '../../../api/client/notes/getNote';
import saveNote from '../../../api/client/notes/saveNote';
import Loading from '../../../components/Loading/Loading';

const NotesRight = ({setters, getters}) => {
    const { setNotesSettings, setUser, setNotes, setNoteId } = setters
    const { noteId } = getters

    let params = useParams();

    useEffect(() => {
        setNoteId(params.note_id === undefined ? null : params.note_id)
    }, [params.note_id, setNoteId])

    const [note, setNote] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [noteLoading, setNoteLoading] = useState(true)
    const [isServerConnectionError, setIsServerConnectionError] = useState(false)

    useEffect(() => {
      if(noteId === null) return
      setNoteLoading(true)
      setIsServerConnectionError(false)

      const promise = getNote(noteId)
      promise.then(result => {
        try {
          const {note, notes_settings, user, found} = JSON.parse(result)
          if(note !== undefined) setNote(note)
          if(notes_settings !== undefined) setNotesSettings(notes_settings)
          if(user !== undefined) setUser(user)
          if(found !== undefined) {
            if(found === false) setNoteId(null)
          }
    
          setNoteLoading(false)
        } catch (error) {
          setNoteLoading(true)
          setIsServerConnectionError(true)
        }
      });
      promise.catch(error => {
        setNoteLoading(true)
        setIsServerConnectionError(true)
      });
    }, [noteId, setNote, setNotesSettings, setUser, setNoteId])

    useEffect(() => {
      if(note === null) return
      setTitle(note.title)
      setContent(note.content)
    }, [note])

    function clickHandlerSave() {
      const promise = saveNote(noteId, {title, content})
      promise
      .then((result) => {
        try {
          const {note, notes_settings, user, notes, found} = JSON.parse(result)
          if(note !== undefined) setNote(note)
          if(notes_settings !== undefined) setNotesSettings(notes_settings)
          if(user !== undefined) setUser(user)
          if(notes !== undefined) setNotes(notes)
          if(found !== undefined) {
            if(found === false) setNoteId(null)
          }

          setNoteLoading(false)
        } catch (error) {

          setNoteLoading(true)
          setIsServerConnectionError(true)
        }
      });
      promise.catch(error => {
        setNoteLoading(true)
        setIsServerConnectionError(true)
      });
    }
    
    return (
      <>
      {
        noteId === null ? <div>open or create a note</div> : 

        noteLoading ? <Loading  isServerConnectionError={isServerConnectionError} flex/> :
        
        <div className='notepad__editor'>
        <div className='notepad__editor__head'>
          <div className='notepad__editor__head_left'>
            <input className='notepad__editor__head__title_input'     type={'text'} value={title} onChange={(e) => setTitle(e.target.value)} placeholder=  {"Click here to change title"}/>
          </div>
          <div className='notepad__editor__head_right'>
            <button   className='notepad__editor__head__save_bttn' onClick={clickHandlerSave}>Save</   button>
            <button   className='notepad__editor__head__cancel_bttn'>Cancel</   button>
          </div>
        </div>
        <textarea className='notepad__editor__textarea'   placeholder='Type something...' 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      }
      </>
    );
};

export default NotesRight;