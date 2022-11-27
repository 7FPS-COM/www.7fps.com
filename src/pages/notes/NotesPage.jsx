import React from 'react';

import '../../scss/notes/notes.scss';

import { Context } from '../../Layout';
import NotesApp from './NotesApp';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const NotesPage = (props) => {

    return (
        <Context.Consumer>
            { ({isLoading, isServerConnectionError, user, setUser}) =>  
                <ModalWindow>
                        {isLoading ?
                        <>Loading</>
                        :
                            user?.auth === true ?
                        <NotesApp setUser={setUser}/> : 'You need to be authorized to use "Notes"'
                        
                        }
                </ModalWindow>
            }
        </Context.Consumer>
    );
};

export default NotesPage;