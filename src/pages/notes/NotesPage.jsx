import React, { useEffect } from 'react';

import '../../scss/notes/notes.scss';

import { Context } from '../../Layout';
import NotesApp from './NotesApp';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';
import Beta from '../../components/Beta/Beta';

const NotesPage = (props) => {
    useEffect(() => {
        setTitle("Notes")
    },[])

    return (
        <Context.Consumer>
            { ({isLoading, isServerConnectionError, user, setUser}) =>  
                <ModalWindow>
                    <div className='notes__wrapper'>
                        <Beta>
                            BETA
                        </Beta>
                        <div className='notes__inner_wrapper'>
                        {isLoading ?
                        <>Loading</>
                        :
                            user?.auth === true ?
                        <NotesApp setUser={setUser}/> : <div className='notepad__not_authorized'><span className='notepad__not_authorized_text'>You have to be authorized to use Notes</span></div>
                        
                        }
                        </div>
                    </div>
                </ModalWindow>
            }
        </Context.Consumer>
    );
};

export default NotesPage;