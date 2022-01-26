import React from 'react';
import styles from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import {Typography} from "@mui/material";
import classNames from "classnames";
import commonUtils from "../../../../utils/commonUtils";

export default function TicketName({ticket}) {
    const classes = styles();

    return (
        <div className={classes.nameWrapper}>
            <Typography className={classNames(classes.name, classes.textHighlight, ticket.name)}>
                {commonUtils.capitalize(ticket.name || itemUtils.getItemRarityName(ticket.erc1155TypeId))} ticket
            </Typography>
        </div>
    );
}