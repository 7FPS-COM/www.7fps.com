import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import sortByRarity from '../../utils/sortByRarity';
import LootList from './components/LootList';
import LootListFilters from './components/LootListFilters';
import LootListItemDescription from './components/LootListItemDescription';
import classes from './scss/LootListApp.module.scss';

const LootListApp = ({lootListResponse}) => {
    const [lootListData, setLootListData] = useState(null)
    const [itemDescription, setItemDescription] = useState(null)

    const [filterName, setFilterName] = useState('')
    const [filterEnabled, setFilterEnabled] = useState(true)
    const [sortBy, setSortBy] = useState('rarity')
    const [reversed, setReversed] = useState(false)
    // sort by:
    // - no sort
    // - name
    // - rarity

    const modifiers = {filterEnabled, sortBy, filterName, reversed}
    const modifierSetters = {setFilterEnabled, setSortBy, setFilterName, setReversed}

    useEffect(() => {
        let data = JSON.parse(JSON.stringify(lootListResponse))

        if(filterEnabled === true) {
            console.log(JSON.stringify(data.weapons))
            data.weapons = data.weapons.filter(item => item.enabled)
        }
        if(filterEnabled === false) {
            data.weapons = data.weapons.filter(item => !item.enabled)
        }
        if(filterName !== '') {
            data.weapons = data.weapons.filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
        }

        if(sortBy === 'name') {
            data = sortByRarity(data)
            data.weapons = data.weapons.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
        }

        if(sortBy === 'rarity') {
            data = sortByRarity(data)
        }

        // sort by rarity

        if(reversed) {
            data.weapons = data.weapons.reverse()
        }

        setLootListData(data)
    }, [
        lootListResponse, 
        filterEnabled, 
        sortBy,
        filterName,
        reversed
    ])
    
    function setCurrentItem(itemId) {
        let item = lootListResponse.weapons.filter(item => item.id === itemId)
        if(item.length < 1) return setItemDescription(null)
        setItemDescription(item[0])
    }

    return (
        <div className={classes.Wrapper}>
            <LootListFilters modifiers={modifiers} modifierSetters={modifierSetters}/>
            <div className={classes.Block}>
                {lootListData === null ? <>Loading...</> : <LootList lootListData={lootListData} setCurrentItem={setCurrentItem}/>}
                <LootListItemDescription itemDescription={itemDescription}/>
            </div>
        </div> 
    );
};

export default LootListApp;