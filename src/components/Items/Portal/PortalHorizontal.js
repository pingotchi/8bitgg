import React from 'react';
import classNames from 'classnames';
import styles from './../styles';
// parts
import HorizontalPrice from "../common/HorizontalPrice/HorizontalPrice";
import HorizontalLink from "../common/HorizontalLink/HorizontalLink";
import PortalImage from "./common/PortalImage";
import CardName from "../common/CardName/CardName";
import CardStats from "../common/CardStats/CardStats";

export default function PortalHorizontal({portal, render}) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        // image
        get image() {
            return <PortalImage portal={portal} />
        },

        // body
        get body() {
            return <div style={{'width': '70%'}}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': "space-around", 'paddingTop': '30px'}}>
                    <div>
                        <CardName itemName={`Portal ${portal.tokenId}`} itemRarity={'none'} item={portal} />
                    </div>
                    <div>
                        <CardStats itemStats={`Haunt ${portal.portal.hauntId}`} />
                    </div>
                </div>
                <div>
                    <HorizontalLink item={portal} url={`https://aavegotchi.com/portal/`} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={portal} />
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
        <div className={classNames(classes.horizontalCard, portal.rarity || 'common')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}