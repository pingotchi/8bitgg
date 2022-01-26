import React from 'react';
import itemUtils from '../../../utils/itemUtils';
import ERC1155 from '../ERC1155/ERC1155';
import TicketImage from "./common/TicketImage";
import TicketName from "./common/TicketName";

export default function Ticket({ticket}) {
    return (
        <ERC1155 item={{
            id: ticket.id || parseInt(ticket.erc1155TypeId),
            rarity: ticket.name || itemUtils.getItemRarityName(ticket.erc1155TypeId),
            category: 3,
            balance: ticket.balance,
            priceInWei: ticket.priceInWei,
            quantity: ticket.quantity
        }}>
            <TicketImage ticket={ticket} />
            <TicketName ticket={ticket} />
        </ERC1155>
    )
}