import React from 'react';
import classes from './LootListFilters.module.scss';

const LootListFilters = ({modifiers, modifierSetters}) => {
    const {filterEnabled, sortBy, filterName, reversed} = modifiers
    const {setFilterEnabled, setSortBy, setFilterName, setReversed} = modifierSetters

    function onChangeFilterEnabled(event) {
        if(event.target.value === 'all') setFilterEnabled(null)
        if(event.target.value === 'enabled') setFilterEnabled(true)
        if(event.target.value === 'disabled') setFilterEnabled(false)
    }

    function onChangeSortBy(event) {
        setSortBy(event.target.value)
    }

    function onChangeReversed(event) {
        setReversed(event.target.checked)
    }

    function onChangeName(event) {
        setFilterName(event.target.value)
    }

    return (
        <div className={classes.LootListFiltersWrapper}>
            <div>
                <input type="text" placeholder='Search...' value={filterName} onChange={onChangeName}/>
            </div>
            <select onChange={onChangeFilterEnabled} value={filterEnabled === null ? "all" : filterEnabled === true ? "enabled" : "disabled"}>
                <option value="all">All</option>
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
            </select>
            <select onChange={onChangeSortBy} value={sortBy}>
                <option value="none">None</option>
                <option value="name">Name</option>
                <option value="rarity">Rarity</option>
            </select>
            <div>
                <input type="checkbox" id="sortReversed" name="sortReversed" onChange={onChangeReversed} checked={reversed}/>
                <label htmlFor="sortReversed">Reversed order</label>
            </div>
        </div>
    );
};

export default LootListFilters;