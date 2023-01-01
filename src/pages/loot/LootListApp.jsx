import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LootList from './components/LootList';
import LootListFilters from './components/LootListFilters';
import classes from './scss/LootListApp.module.scss';

const LootListApp = ({lootListResponse}) => {
    const [lootListData, setLootListData] = useState(lootListResponse)

    const [filterName, setFilterName] = useState('')
    const [filterEnabled, setFilterEnabled] = useState(true)
    const [sortBy, setSortBy] = useState(false)
    // sort by:
    // - no sort
    // - name
    // - rarity

    const modifiers = {filterEnabled, sortBy, filterName}
    const modifierSetters = {setFilterEnabled, setSortBy, setFilterName}

    useEffect(() => {
        let data = lootListResponse

        if(filterEnabled === true) {
            data.weapons = data.weapons.filter(item => item.enabled)
        }
        if(filterEnabled === false) {
            data.weapons = data.weapons.filter(item => !item.enabled)
        }
        if(filterName !== '') {
            data.weapons = data.weapons.filter(item => item.name.includes(filterName))
        }

        console.log(modifiers)

        setLootListData(data)
    }, [
        lootListResponse, 
        filterEnabled, 
        sortBy,
        filterName
    ])
    

    return (
        <div className={classes.Wrapper}>
            <LootListFilters modifiers={modifiers} modifierSetters={modifierSetters}/>
            <LootList lootListData={lootListData}/>
        </div> 
    );
};

export default LootListApp;