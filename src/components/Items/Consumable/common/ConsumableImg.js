import React from 'react';
import { ERC1155InnerStyles } from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import classNames from "classnames";

export default function ConsumableImg({consumable, additionalClass}) {
    const classes = ERC1155InnerStyles();

    return (
        <div className={classNames(classes.iconWrapper, additionalClass)}>
            <img
                src={itemUtils.getWearableImg(consumable.id || consumable.erc1155TypeId)}
                className={classes.icon}
            />
        </div>
    );
}