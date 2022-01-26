import React from 'react';
import styles from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import {Typography} from "@mui/material";
import classNames from "classnames";

export default function WearableName({wearable}) {
    const classes = styles();
    const name = itemUtils.getItemNameById(wearable.id || wearable.erc1155TypeId);
    const rarity = itemUtils.getItemRarityById(wearable.id || wearable.erc1155TypeId);

    return (
        <div className={classes.nameWrapper}>
            <Typography className={classNames(classes.name, classes.textHighlight, rarity)}>
                {name}
            </Typography>
        </div>
    );
}