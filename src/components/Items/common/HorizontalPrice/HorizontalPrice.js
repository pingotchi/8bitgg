import React from 'react';
import styles from "./styles";
import Web3 from "web3";
import ghstIcon from "../../../../assets/images/ghst-doubleside.gif";

const web3 = new Web3();

export default function HorizontalPrice({item}) {
    const classes = styles();

    return (
        <div className={classes.priceRoot}>
            <img src={ghstIcon} />
            {
                web3.utils.fromWei(item.priceInWei)
            }
        </div>
    );
}