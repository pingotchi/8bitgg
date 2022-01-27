import React from 'react';
import classNames from 'classnames';
import styles from './../styles';
// parts
import HorizontalPrice from "../common/HorizontalPrice/HorizontalPrice";
import HorizontalLink from "../common/HorizontalLink/HorizontalLink";
import WearableImage from "./common/WearableImage/WearableImage";
import CardName from "../common/CardName/CardName";
import CardStats from "../common/CardStats/CardStats";

export default function WearableHorizontal({wearable, render}) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        // image
        get image() {
            return <WearableImage wearable={wearable} />
        },

        // body
        get body() {
            return <div style={{'width': '70%'}}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': "space-around", 'paddingTop': '30px'}}>
                    <div>
                        <CardName item={wearable} />
                    </div>
                    <div>
                        <CardStats item={wearable} />
                    </div>
                </div>
                <div>
                    <HorizontalLink item={wearable} url={'https://aavegotchi.com/baazaar/erc1155/'} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={wearable} />
        }
    }

    function renderSection(value) {
        if (typeof value === 'string') return gotchiSections[value];

        return (
            Object.keys(value).map( (key) => (
                gotchiSections[key](value[key].map( item => (
                    renderSection(item)
                )))
            ))
        )
    }
    
    return (
        <div className={classNames(classes.horizontalCard, wearable.rarity || 'common')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}