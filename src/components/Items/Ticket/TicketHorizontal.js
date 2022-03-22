import React from 'react';
import classNames from 'classnames';

import itemUtils from 'utils/itemUtils';

import TicketImage from './common/TicketImage';
import HorizontalPrice from '../common/HorizontalPrice/HorizontalPrice';
import HorizontalLink from '../common/HorizontalLink/HorizontalLink';
import CardName from '../common/CardName/CardName';
import CardStats from '../common/CardStats/CardStats';

import styles from './../styles';

export default function TicketHorizontal({ ticket, render }) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        // image
        get image() {
            return <TicketImage ticket={ticket} key={`${ticket.id}-ticket-image`}/>
        },

        // body
        get body() {
            return <div style={{'width': '70%'}} key={`${ticket.id}-ticket-body`}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', 'paddingTop': '30px'}}>
                    <div>
                        <CardName itemName={`${ticket.name || itemUtils.getItemRarityName(ticket.erc1155TypeId)} ticket`}
                                  itemRarity={itemUtils.getItemRarityName(ticket.erc1155TypeId)} item={ticket} />
                    </div>
                    <div>
                        <CardStats itemStats={`Quantity: ${ticket.quantity}`} />
                    </div>
                </div>
                <div>
                    <HorizontalLink item={ticket} url={'https://aavegotchi.com/baazaar/erc1155/'} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={ticket} key={`${ticket.id}-ticket-price`} />
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
        <div className={classNames(classes.horizontalCard, ticket.rarity || 'common')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}
