import React from 'react';
import ERC1155 from '../ERC1155/ERC1155';
import ConsumableImg from "./common/ConsumableImg";
import ConsumableName from "./common/ConsumableName";
import ConsumableStats from "./common/ConsumableStats";

export default function Consumable({consumable}) {
    return (
        <ERC1155 item={{ id: consumable.id, rarity: 'drop', category: 2, balance: consumable.balance }}>
            <ConsumableImg consumable={consumable} />
            <ConsumableName consumable={consumable} />
            <ConsumableStats consumable={consumable} />
        </ERC1155>
    )
}