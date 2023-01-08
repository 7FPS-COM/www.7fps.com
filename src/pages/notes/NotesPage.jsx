import React, { useEffect } from 'react';

import '../../scss/notes/notes.scss';

import { Context } from '../../Layout';
import NotesApp from './NotesApp';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';

const NotesPage = (props) => {
    useEffect(() => {
        setTitle("Notes")
    },[])

    return (
        <Context.Consumer>
            { ({isLoading, isServerConnectionError, user, setUser}) =>  
                <ModalWindow>
                        {isLoading ?
                        <>Loading</>
                        :
                            user?.auth === true ?
                        <NotesApp setUser={setUser}/> : <div className='notepad__not_authorized'><span className='notepad__not_authorized_text'>You have to be authorized to use Notes</span></div>
                        
                        }
                </ModalWindow>
            }
        </Context.Consumer>
    );
};

export default NotesPage;