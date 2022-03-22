import React from 'react';
import { Link } from '@mui/material';
import CallMade from '@mui/icons-material/CallMade';
import classNames from 'classnames';

import styles from './styles';

export default function HorizontalLink({ item, name, url, additionalClass }) {
    const classes = styles();

    return (
        <Link
            className={classNames(classes.linkName, additionalClass)}
            href={`${url}${item.listingID || item.id}`}
            target='_blank'
            underline='none'
            key={`${item.id}-name`}
        >
            <p>{name || 'Open in Baazaar'}</p>
            <CallMade className={classes.callMadeIcon} />
        </Link>
    );
}
