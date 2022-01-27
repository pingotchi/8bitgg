import React from 'react';
import classNames from 'classnames';
import styles from './styles';
import GotchiLevel from './GotchiLevel';
import GotchiTraitsHighlight from './GotchiTraitsHighlight';
// parts
import GotchiId from "./common/GotchiId/GotchiId";
import GotchiCollateral from "./common/GotchiCollateral/GotchiCollateral";
import GotchiMainTraits from "./common/GotchiMainTraits/GotchiMainTraits";
import GotchiName from "./common/GotchiName/GotchiName";
import GotchiSVG from "./common/GotchiSVG/GotchiSVG";
import HorizontalPrice from "../Items/common/HorizontalPrice/HorizontalPrice";

export default function GotchiHorizontal({gotchi, item, title, narrowed, renderSvgByStats, render}) {
    const classes = styles();
    const additionalClass = 'horizontal';

    const gotchiSections = {
        badges: (children) => {
            return (
                <div className={classes.gotchiBadges} key={`${gotchi.id}-badges`}>
                    {children}
                </div>
            );
        },

        // image
        get image() {
            return <GotchiSVG gotchi={gotchi} renderSvgByStats={renderSvgByStats} additionalClass={additionalClass} key={`${gotchi.id}-gotchi-image`} />
        },

        // body
        get body() {
            return <div style={{'width': '70%'}} key={`${gotchi.id}-gotchi-body`}>
                <div style={{'display': 'flex', 'flexDirection': 'row', 'width': '100%'}}>
                    <div style={{minWidth: '50%'}}>
                        <GotchiId gotchi={gotchi} title={title} additionalClass={additionalClass}/>
                    </div>
                    <div style={{'display': 'flex', 'flexDirection': 'row', justifyContent: 'flex-end', minWidth: '50%'}}>
                        <GotchiLevel
                            level={gotchi.level}
                            toNextLevel={gotchi.toNextLevel}
                            experience={gotchi.experience}
                            size={25}
                            key={`${gotchi.id}-level`}
                            additionalClass={additionalClass}
                        />
                        <GotchiCollateral gotchi={gotchi} additionalClass={additionalClass}/>
                    </div>
                </div>
                <div>
                    <div style={{'display': 'flex', 'flexDirection': 'row'}}>
                        <div>
                            <GotchiMainTraits gotchi={gotchi} additionalClass={additionalClass}/>
                        </div>
                        <div>
                            <GotchiTraitsHighlight traits={gotchi.numericTraits} currentTraits={gotchi.modifiedNumericTraits} key={`${gotchi.id}-numericTraits`} additionalClass={additionalClass} />
                        </div>
                    </div>
                </div>
                <div>
                    <GotchiName gotchi={gotchi} additionalClass={additionalClass} />
                </div>
            </div>
        },

        // price
        get price() {
            return <HorizontalPrice item={item} key={`${gotchi.id}-gotchi-price`} />
        }
    }

    function renderSection(value) {

        if (typeof value === 'string') return gotchiSections[value];

        return (
            Object.keys(value).map( (key) => (
                gotchiSections[key](value[key].map( item => (
                    renderSection(item)
                )))
            ))
        )
    }
    
    return (
        <div className={classNames(classes.gotchi, `haunt${gotchi.hauntId}`, narrowed && 'narrowed', 'horizontal')}>
            {render.map( (name) => {
                return renderSection(name)
            })}
        </div>
    );
}