import React from 'react';
import classNames from 'classnames';
import styles from './../styles';
// parts
import ConsumableImg from "./common/ConsumableImg";
import HorizontalPrice from "../common/HorizontalPrice/HorizontalPrice";
import ConsumableName from "./common/ConsumableName";
import ConsumableStats from "./common/ConsumableStats";
import HorizontalLink from "../common/HorizontalLink/HorizontalLink";

export default function ConsumableHorizontal({consumable, render}) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        // image
        get image() {
            return <ConsumableImg consumable={consumable} additionalClass={additionalClass}/>
        },

        // body
        get body() {
            return <div style={{'width': '70%'}}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': "space-around", 'paddingTop': '30px'}}>
                    <div>
                        <ConsumableName consumable={consumable} />
                    </div>
                    <div>
                        <ConsumableStats consumable={consumable} />
                    </div>
                </div>
                <div>
                    <HorizontalLink item={consumable} url={'https://aavegotchi.com/baazaar/erc1155/'} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={consumable} />
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
        <div className={classNames(classes.horizontalCard, 'common')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}