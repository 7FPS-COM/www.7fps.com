import React from 'react';

const ModalWindow = ({children}) => {
    return (
        <div className='content__inner'>
            <div className='content__inner__modal'>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;