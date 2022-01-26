import React from 'react';
import styles from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import {Typography} from "@mui/material";

export default function WearableStats({wearable}) {
    const classes = styles();
    const stats = itemUtils.getEmojiStatsById(wearable.id || wearable.erc1155TypeId);

    return (
        <Typography variant='subtitle1' className={classes.stats}>
            {stats}
        </Typography>
    );
}