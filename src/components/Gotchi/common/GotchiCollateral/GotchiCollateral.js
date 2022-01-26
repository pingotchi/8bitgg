import React from 'react';
import styles from "./styles";
import graphUtils from "../../../../utils/graphUtils";
import {Tooltip} from "@mui/material";

export default function GotchiCollateral({gotchi}) {
    const classes = styles();
    const collateral = graphUtils.getCollateralName(gotchi.collateral);

    return (
        <Tooltip title={collateral} classes={{ tooltip: classes.customTooltip }} enterTouchDelay={0} placement='top' followCursor key={`${gotchi.id}-collateral`}>
            <div className={classes.gotchiBadge}>
                <img src={graphUtils.getCollateralImg(collateral)} width={25} alt={collateral} />
            </div>
        </Tooltip>
    );
}