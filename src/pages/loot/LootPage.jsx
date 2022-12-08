import React, { useEffect } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';

const LootPage = () => {
    useEffect(() => {
        setTitle("Loot List")
    },[])

    return (
        <ModalWindow>
            LootPage
        </ModalWindow>
    );
};

export default LootPage;