import React from 'react';
import itemUtils from "../../../../utils/itemUtils";
import {Typography} from "@mui/material";

export default function ConsumableStats({consumable, additionalClass}) {
    const stats = itemUtils.getEmojiStatsById(consumable.id || consumable.erc1155TypeId);

    return (
        <Typography variant='subtitle1' className={additionalClass}>
            {stats}
        </Typography>
    );
}