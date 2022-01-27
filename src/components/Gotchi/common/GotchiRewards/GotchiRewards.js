import React from 'react';
import styles from "./styles";
import {Tooltip, Typography} from "@mui/material";
import {Box} from "@mui/system";
import commonUtils from "../../../../utils/commonUtils";
import ghstIcon from "../../../../assets/images/ghst-doubleside.gif";

export default function GotchiRewards({gotchi}) {
    const classes = styles();

    return (
        gotchi.reward || gotchi.reward === 0 ? (
            <div className={classes.rankBox}>
                {gotchi.reward > 0 ? (
                    <Tooltip
                        title={
                            <Box>
                                {gotchi.rewardStats.map((item, index) => {
                                    return item.reward !== 0 ? (
                                        <div key={index}>
                                            <Typography variant='caption'>
                                                {item.name}[{item.position}] - <Box className={classes.rankReward}>
                                                {commonUtils.formatPrice(item.reward)} <img src={ghstIcon} width='14' alt='GHST Token Icon' />
                                            </Box>
                                            </Typography>
                                        </div>
                                    ) : (
                                        null
                                    )
                                })}
                            </Box>
                        }
                        classes={{ tooltip: classes.customTooltip }}
                        enterTouchDelay={0}
                        placement='top'
                        followCursor
                    >
                        <Box className={classes.rankRewardAmount}>
                            <Typography className={classes.rankRewardAmountNumber}>{commonUtils.formatPrice(gotchi.reward)}</Typography>
                            <img src={ghstIcon} width='18' alt='GHST Token Icon' />
                        </Box>
                    </Tooltip>

                ) : (
                    <div className={classes.rankStatus} key={`${gotchi.id}-rewards`}>
                        <Typography className={classes.rankStatusText}>Unkranked</Typography>
                    </div>
                )}
            </div>
        ) : (
            null
        )
    );
}