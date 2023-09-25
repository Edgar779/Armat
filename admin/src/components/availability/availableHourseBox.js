import React from "react";
import moment from 'moment';
import {availabilityStyles} from "./styles";

export const AvailableHourseBox = ({day, info}) => {
    const classes = availabilityStyles()

    const startEndTime = (it) => {
        return moment(`Mon 03-Jul-2017, ${it}`, 'ddd DD-MMM-YYYY, hh:mm A').format('hh:mm A');
    };

    return (
        <div className={classes.availableHoursBox}>
            <div className={classes.availableHoursBoxHeader}>
                <span>{day}</span>
            </div>
            <div className={classes.availableHoursBoxBody}>
                {info && info.length ? (
                    info.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item && item.available ? (
                                    <span key={index} className={classes.availableHoursBoxBodyInfo}>
                                        {`${startEndTime(item.from)} - ${startEndTime(item.to)}`}
                                    </span>
                                ) : (
                                    <span className={classes.availableHoursBoxBodyInfo}> Closed </span>
                                )}
                            </React.Fragment>
                        );
                    })
                ) : (
                    <span className={classes.availableHoursBoxBodyInfo}>Not Set</span>
                )}
            </div>
        </div>


    )
}