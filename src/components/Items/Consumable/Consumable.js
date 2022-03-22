import React from 'react';

import ConsumableImg from './common/ConsumableImg';
import ConsumableStats from './common/ConsumableStats';
import CardName from '../common/CardName/CardName';
import ERC1155 from '../ERC1155/ERC1155';

export default function Consumable({ consumable }) {
    return (
        <ERC1155 item={{ id: consumable.id, rarity: 'drop', category: 2, balance: consumable.balance }}>
            <ConsumableImg consumable={consumable} />
            <CardName itemName={consumable} />
            <ConsumableStats consumable={consumable} />
        </ERC1155>
    )
}
