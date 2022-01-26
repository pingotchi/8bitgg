import React from 'react';
import { ERC1155InnerStyles } from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import classNames from "classnames";
import {Typography} from "@mui/material";

export default function ConsumableName({consumable, additionalClass}) {
    const classes = ERC1155InnerStyles();
    const name = itemUtils.getItemNameById(consumable.id || consumable.erc1155TypeId);

    return (
        <div className={classNames(classes.nameWrapper, additionalClass)}>
            <Typography className={classNames(classes.name, classes.textHighlight, 'drop')}>
                {name}
            </Typography>
        </div>
    );
}