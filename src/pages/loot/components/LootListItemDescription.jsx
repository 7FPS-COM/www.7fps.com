import React from 'react';
import hexToRGB from '../../../utils/hexToRGB';
import rarityColors from '../../../utils/rarityColors';
import classes from './LootListItemDescription.module.scss';

const LootListItemDescription = ({itemDescription}) => {
    if(itemDescription === null) return (
        <div className={classes.Wrapper}>
            Choose item
        </div>
    );
    
    if(itemDescription !== null) {
        let color = '#ffffff'
        let rarityList = Object.keys(rarityColors)
        if(rarityList.includes(itemDescription.rarity)) {
            color = rarityColors[itemDescription.rarity]
        }

        return (
        <div className={classes.Wrapper} style={{backgroundColor: hexToRGB(color, 0.3)}}>
            <div className={classes.InnerWrapper}>    
                <img alt={itemDescription.name} src={itemDescription.images.background}
                style={{width: 128}}/>
                <h2>{itemDescription.name}</h2>
                <h3>{itemDescription.rarity}</h3>
                <p>{itemDescription.description}</p>
            </div>
        </div>
    )};
};

export default LootListItemDescription;