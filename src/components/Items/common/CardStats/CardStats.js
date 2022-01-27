import React from 'react';
import styles from "../../styles";
import itemUtils from "../../../../utils/itemUtils";
import {Typography} from "@mui/material";

export default function CardStats({itemStats, item}) {
    const classes = styles();
    const stats = itemStats || itemUtils.getEmojiStatsById(item.id || item.erc1155TypeId);

    return (
        <Typography variant='subtitle1' className={classes.stats}>
            {stats}
        </Typography>
    );
}