import React from 'react';
import styles from "./styles";
import {Link} from "@mui/material";
import CallMade from "@mui/icons-material/CallMade";
import classNames from "classnames";

export default function GotchiName({gotchi, additionalClass}) {
    const classes = styles();

    return (
        <Link
            className={classNames(classes.gotchiName, additionalClass)}
            href={`https://aavegotchi.com/gotchi/${gotchi.id}`}
            target='_blank'
            underline='none'
            key={`${gotchi.id}-name`}
        >
            <p>{gotchi.name ? gotchi.name : 'Unnamed'}</p>
            <CallMade className={classes.callMadeIcon} />
        </Link>
    );
}