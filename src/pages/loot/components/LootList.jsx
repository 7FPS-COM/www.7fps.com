import React from 'react';
import hexToRGB from '../../../utils/hexToRGB';
import rarityColors from '../../../utils/rarityColors';
import classes from './LootList.module.scss';

const LootList = ({lootListData, setCurrentItem}) => {
    let colors = Object.keys(rarityColors)

    return (
        <div className={classes.LootListWrapper}>
            {lootListData.weapons.map(item => (
                <button style={{backgroundColor: colors.includes(item.rarity) ? hexToRGB(rarityColors[item.rarity], 0.6) : hexToRGB("#ffffff", 0.6) }} className={classes.Item} onClick={() => setCurrentItem(item.id)} key={item.id}>
                    <img alt={item.name} src={item.images.background}
                style={{width: 115, display: 'inline-block'}}
                />
                </button>
            ))}
        </div>
    );
};

export default LootList;