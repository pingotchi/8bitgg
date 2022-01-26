import React from 'react';
import styles from "./styles";
import GotchiSvgByStats from "../../GotchiSvgByStats";
import GotchiSvg from "../../GotchiSvg";
import ShineLabel from "../../../Labels/ShineLabel";
import classNames from "classnames";

export default function GotchiSVG({gotchi, renderSvgByStats, additionalClass}) {
    const classes = styles();

    return (
        <div className={classNames(classes.gotchiSvg, additionalClass)} key={`${gotchi.id}-svg`}>
            {
                renderSvgByStats ? (
                    <GotchiSvgByStats gotchi={gotchi} size={'100%'} />
                ) : (
                    <GotchiSvg id={gotchi.id} size={'100%'} />
                )
            }

            {gotchi.equippedSetName ? (
                <div className={classes.gotchiSetName}>
                    <ShineLabel text={gotchi.equippedSetName} />
                </div>
            ) : (
                null
            )}
        </div>
    );
}