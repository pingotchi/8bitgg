import React from 'react';
import styles from "./styles";
import {Tooltip} from "@mui/material";

export default function GotchiId({gotchi, title}) {
    const classes = styles();

    return (
        <Tooltip title={`Haunt ${gotchi.hauntId}`} classes={{ tooltip: classes.customTooltip }} enterTouchDelay={0} placement='top' followCursor>
            <div className={classes.gotchiId}>
                {title || gotchi.id}
            </div>
        </Tooltip>
    );
}