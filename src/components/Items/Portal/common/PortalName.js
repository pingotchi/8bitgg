import React from 'react';
import styles from "../../styles";
import sealedPortal from "../../../../assets/images/portal-sealed.svg";
import openPortal from "../../../../assets/images/portal-open.svg";
import h2SealedPortal from "../../../../assets/images/h2_sealed.svg";
import h2OpenPortal from "../../../../assets/images/h2_open.svg";

export default function PortalName({portal}) {
    const classes = styles();

    return (
        <img className={classes.portalImage}
             style={{'maxWidth': '100px'}}
             src={
                portal.portal.hauntId === "1" ?
                (portal.category === '0' ? sealedPortal : openPortal) :
                (portal.category === '0' ? h2SealedPortal : h2OpenPortal)
        } alt="Portal" />
    );
}