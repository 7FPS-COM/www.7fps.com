import React from 'react';
import classes from './LootList.module.scss';

const LootList = ({lootListData}) => {
    return (
        <div className={classes.LootListWrapper}>
            {lootListData.weapons.map(item => (
                <img id={item.id} alt={item.name} src={item.images.background}
                style={{width: 115, display: 'inline-block'}}
                />
            ))}
        </div>
    );
};

export default LootList;