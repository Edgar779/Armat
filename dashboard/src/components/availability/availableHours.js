import React  from 'react';
import { availabilityStyles } from './styles';
import { FindLoad } from 'utils';
import { AvailableHourseBox } from './availableHourseBox';

export const AvailableHours = ({ onModel, availabilityData, marginLeft }) => {
    const classes = availabilityStyles();

    const shortDayNames = (name) => {
        switch (name) {
            case 'monday':
                return 'Mon';
            case 'tuesday':
                return 'tue';
            case 'wednesday':
                return 'wed';
            case 'thursday':
                return 'thu';
            case 'friday':
                return 'fri';
            case 'saturday':
                return 'sat';
            case 'sunday':
                return 'sun';
        }
    };


    return (
        <div className={classes.availableHours} style={{ marginLeft: marginLeft ? marginLeft : '0', minHeight: 308 }}>
            <div className={classes.availableHoursBlock}>
                {availabilityData && Array.isArray(availabilityData) === false ? (
                    Object.keys(availabilityData).map((item, index) => {
                        return (
                            availabilityData[item] && (
                                <React.Fragment key={index}>
                                    <AvailableHourseBox
                                        key={index}
                                        day={shortDayNames(item)}
                                        info={availabilityData && availabilityData[item]}
                                    />
                                </React.Fragment>
                            )
                        );
                    })
                ) : (
                    <p className={classes.noItems}>No Hours Yet</p>
                )}
            </div>
        </div>
    );
};
