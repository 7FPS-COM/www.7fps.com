import React, {useState} from 'react';
import { Icon, Confirm } from 'semantic-ui-react'
import deleteNote from '../../../api/client/notes/deleteNote';

const LeftDeleteButton = ({note, setters, getters}) => {
    const {setNotes, setUser, setNotesSettings, setNotesLoading, setIsServerConnectionError, setNoteId} = setters
    const {noteId, notesLoading} = getters

    const [open, setOpen] = useState(false)

    function openHandler(e) {
        if (!e) e = window.event;
        e.preventDefault()

        if (e.shiftKey) {
            deleteNoteFunc()
            return
        }

        setOpen(true)
    }

    function cancelHandler(e) {
        e.preventDefault()
        setOpen(false)
    }

    function confirmHandler(e) {
        e.preventDefault()
        setOpen(false)

        deleteNoteFunc()
    }

    function deleteNoteFunc() {
      setNotesLoading(true)
      const promise = deleteNote(note.note_id)
      promise.then(result => {
        try {
          const {notes, notes_settings, user} = JSON.parse(result)
          if(user !== undefined) setUser(user)
          if(notes !== undefined) setNotes(notes)
          if(notes_settings !== undefined) setNotesSettings(notes_settings)

          if(note.note_id === noteId) setNoteId(null)
    
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
        <>
            <button onClick={(e) => openHandler(e)} className='btnWithIcon' disabled={notesLoading}>
              <Icon name='trash alternate' color="red" />
            </button>
            <Confirm
                content={<div className='content'>Are you sure that you want to delete <b>{note.title}</b></div>}
                confirmButton={'Delete'}

                onClick={(e) => e.preventDefault()}
                open={open}
                onCancel={(e) => cancelHandler(e)}
                onConfirm={(e) => confirmHandler(e)}
            />
        </>
      )
}

export default LeftDeleteButton;