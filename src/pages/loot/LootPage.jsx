import React, { useEffect } from 'react';
import { useState } from 'react';
import getLootList from '../../api/fortnite/getLootList';
import Loading from '../../components/Loading/Loading';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import setTitle from '../../utils/setTitle';
import LootListApp from './LootListApp';
import classes from './scss/LootPage.module.scss';

const LootPage = () => {
    const [lootListResponse, setLootListResponse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isServerConnectionError, setIsServerConnectionError] = useState(false)

    useEffect(() => {
        setTitle("Loot List")

        const promise = getLootList()
        promise.then(result => {
            try {
            const data = JSON.parse(result)
            if(data.result === false) return setIsServerConnectionError(true)

            setLootListResponse(data)
            setIsLoading(false)
            } catch (error) {
            setIsServerConnectionError(true)
            }
        });
        promise.catch(error => {
            setIsServerConnectionError(true)
        });
    },[])

    return (
        <ModalWindow>
            <div className={classes.Wrapper}>
            {
                isLoading || lootListResponse === null ? <Loading isServerConnectionError={isServerConnectionError}/> :
                <LootListApp lootListResponse={lootListResponse}/>
            }
            </div>
        </ModalWindow>
    );
};

export default LootPage;