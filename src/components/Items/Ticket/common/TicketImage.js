import React from 'react';
import styles from "../../styles";
import itemUtils from "../../../../utils/itemUtils";

export default function TicketImage({ticket}) {
    const classes = styles();

    return (
        <div className={classes.iconWrapper}>
            <img
                src={itemUtils.getTicketImg(ticket.name || itemUtils.getItemRarityName(ticket.erc1155TypeId))}
                alt={ticket.name || itemUtils.getItemRarityName(ticket.erc1155TypeId)}
                className={classes.icon}
            />
        </div>
    );
}