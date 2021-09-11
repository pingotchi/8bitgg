import React, { useState } from 'react';
import Moment from 'react-moment';
import { DateTime, Duration } from "luxon";
import moment from 'moment';
import 'moment-timezone';
import useInterval from '../../hooks/useInterval';
import useStyles from './styles';

console.log(Duration);

// Moment.globalTimezone = 'America/Los_Angeles';
const timeZone = moment.tz.guess(true);
const interval = 1000/24;

const names = {
    S: ['millisecond', 'milliseconds'],
    ss: ['second', 'seconds'],
    mm: ['minute', 'minutes'],
    hh: ['hour', 'hours'],
    dd: ['day', 'days'],
    M: ['month', 'months'],
    // YY: ['year', 'years'] 
}

// const l = names.length-1;

console.log(moment().utcOffset());

const getName = (names, number) => {
    return names[Number(number) === 1 ? 0 : 1];
}

export default function Countdown({date, format}) {
    const [newDate, setNewDate] = useState('');
    const classes = useStyles();
    const formatArray = format.split(':');

    useInterval(() => {
        const diffTime = date.getTime() - DateTime.now().ts;

        setNewDate(Duration.fromObject({milliseconds: diffTime}).toFormat(format));
    }, interval);

    return (
        <>
            <div className={classes.wrapper}>
                {
                    newDate.split(':').map((item, index) => {
                        return (
                            <div className={classes.inner}>
                                <span className={classes.number}>
                                    {item}
                                </span>
                                <p className={classes.text}>
                                    {getName(names[formatArray[index]], item)}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}