import React, {useEffect, useState} from "react";
import {FindLoad, FindSuccess, } from "utils";
import moment from "moment";
import {Checkbox} from "@material-ui/core";
import {modalStyle} from "./core/styles";
import {ValidationInput} from "../inputs/validationInput";
import {Images} from "../../theme";
import useWindowDimensions from "../../utils/width";

const inputStyle = {
    widths: '111px'
}

export const AvailabilitySchedule = ({availabilityData, onModel, handleClose,handleGetTimes}) => {
    const width = useWindowDimensions();
    const [times, setTime] = useState(
        Object.keys(availabilityData).length !== 0
            ? availabilityData :
            width.width < 1240
            ? {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: [],
            }
            : {
                monday: [],
                friday: [],
                tuesday: [],
                saturday: [],
                wednesday: [],
                sunday: [],
                thursday: [],
            }
    );

    const shortDayNames = (name) => {
        switch (name) {
            case 'monday' :
                return 'Mon'
            case 'tuesday' :
                return 'tue'
            case 'wednesday' :
                return 'wed'
            case 'thursday' :
                return 'thu'
            case 'friday' :
                return 'fri'
            case 'saturday' :
                return 'sat'
            case 'sunday' :
                return 'sun'
        }
    }

    useEffect(() =>{
        handleGetTimes(times)
    }, [times])

    const classes = modalStyle()

    const addNewRow = (key) => {
        let newObj = {...times};
        newObj[key].push({
            from: moment().format('HH:mm'),
            to: moment().format('HH:mm'),
            available: true,
        })
        setTime(newObj)
    }


    const changeData = (e, index, key) => {
        let obj = {...times}
        obj[key][index][e.target.name] = e.target.value
        if (e.target.value === '') {
            obj[key][index][e.target.name] = !e.target.checked;
        }
        setTime(obj)
    }

    const removeRow = (key, index,) => {
        let obj = {...times}
        obj[key].splice(index, 1)
        setTime(obj)
    }

    const handleSubmit = () => {
        // dispatch(availabilityScheduleActions.createAvailabilitySchedule(times, params.id, onModel));
    }

    const loader = FindLoad('CREATE_AVAILABILITY_SCHEDULE_GLOBAL')
    const success = FindSuccess('CREATE_AVAILABILITY_SCHEDULE_GLOBAL')

    // useEffect(()=>{
    //     if(success){
    //         handleClose();
    //     }
    // },[success])

    return (

        <div className={classes.availableScheduleWrapper}>
            <div className={classes.scrollable}>
                {
                    Object.keys(times).map(function (key, weekDayIndex) {
                        return (
                            <div key={weekDayIndex} className={classes.timeRow}>
                                <p className={classes.dayName}>{shortDayNames(key)}</p>
                                <div style={{display:'flex'}}>
                                    {!times[key].length && (
                                        <div className={classes.addTime} onClick={() => addNewRow(key)}>
                                            <img src={Images.addHourIcon} alt="icon"/>
                                            <span>Add Hours</span>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    {times[key].length
                                        ? times[key].map((item, index) => {
                                            return (
                                                <div key={index} className={classes.times}>
                                                    <ValidationInput
                                                        style={inputStyle}
                                                        className={classes.timeInputStyle}
                                                        errorFalse={true}
                                                        // disabled={!item.isActive}
                                                        name="from"
                                                        value={item.from}
                                                        type="time"
                                                        onChange={(e) => {
                                                            changeData(e, index, key);
                                                        }}
                                                    />
                                                    <p className={classes.smallLine}>-</p>
                                                    <ValidationInput
                                                        style={inputStyle}
                                                        className={classes.timeInputStyle}
                                                        errorFalse={true}
                                                        // disabled={!item.isActive}
                                                        name="to"
                                                        value={item.to}
                                                        type="time"
                                                        onChange={(e) => {
                                                            changeData(e, index, key);
                                                        }}
                                                    />

                                                    <span className={classes.removeTimeBtn} onClick={() => {
                                                        removeRow(key, index)
                                                    }}>Remove</span>

                                                    <span
                                                        className={classes.removeTimeBtn}
                                                        onClick={() => {
                                                            removeRow(key, index);
                                                        }}>
                                                      Remove
                                                  </span>

                                                    <div className={classes.closeCheckbox}>
                                                        <Checkbox
                                                            checked={!item.available}
                                                            name="available"
                                                            className={classes.customCheckbox}
                                                            onChange={(e) => {
                                                                changeData(e, index, key);
                                                            }}
                                                        />
                                                        <span className={classes.notAvailableText}>Closed</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        : ''}
                                    {times[key].length ? (
                                        <p onClick={() => addNewRow(key)} className={classes.moreHoursBtn}>
                                            Add more hours
                                        </p>
                                    ) : null}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}