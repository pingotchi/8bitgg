import React from 'react';
import styles from "./styles";
import itemUtils from "../../../../../utils/itemUtils";

export default function WearableImage({wearable}) {
    const classes = styles();
    const name = itemUtils.getItemNameById(wearable.id || wearable.erc1155TypeId);

    return (
        <div className={classes.iconWrapper}>
            <img
                src={itemUtils.getWearableImg(wearable.id || wearable.erc1155TypeId)}
                alt={name}
                className={classes.icon}
            />
        </div>
    );
}