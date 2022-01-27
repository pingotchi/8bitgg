import React from 'react';
import styles from "./styles";
import commonUtils from "../../../../utils/commonUtils";
import {Link} from "@mui/material";

export default function GotchiOwner({gotchi}) {
    const classes = styles();

    return (
        <Link
            className={classes.owner}
            href={`/client/?address=${gotchi.owner.id}`}
            target='_blank'
        >
            <p>{commonUtils.cutAddress(gotchi.owner.id)}</p>
        </Link>
    );
}