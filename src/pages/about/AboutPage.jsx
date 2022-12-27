import React, { useEffect } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';

const AboutPage = () => {
    useEffect(() => {
        setTitle("About")
    },[])

    return (
        <ModalWindow>
            About page
        </ModalWindow>
    );
};

export default AboutPage;