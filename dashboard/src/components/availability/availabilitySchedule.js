import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { Checkbox, FormControlLabel } from '@mui/material';
import { modalsStyles } from './styles';
import { ValidationInput } from '../inputs/validationInput';
import { Svg } from 'assets';
import { CreateCancel } from "../buttons";
import { organizationActions } from "store";

export const AvailabilitySchedule = ({  orgById, editActionType }) => {
    const dispatch = useDispatch()
    const classes = modalsStyles();
    const [stateBool, setStateBool] = useState(false);
    const [times, setTime] = useState(
      orgById?.hours && Object.keys(orgById?.hours).length !== 0
            ? orgById?.hours
            : {
                  monday: [],
                  tuesday: [],
                  wednesday: [],
                  thursday: [],
                  friday: [],
                  saturday: [],
                  sunday: [],
              }
    );

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

    const addNewRow = (key) => {
        let newObj = { ...times };
        newObj[key].push({
            from: moment().format('HH:mm'),
            to: moment().format('HH:mm'),
            available: true,
        });
        setTime(newObj);
        setStateBool(true);
    };

    const changeData = (e, index, key) => {
        let obj = { ...times };
        obj[key][index][e.target.name] = e.target.value;
        if (e.target.value === '') {
            obj[key][index][e.target.name] = !e.target.checked;
        }
        setTime(obj);
        setStateBool(true);
    };

    const removeRow = (key, index) => {
        let obj = { ...times };
        obj[key].splice(index, 1);
        setTime(obj);
        setStateBool(true);
    };

    useEffect(() => {
        if (stateBool === true && orgById?.id) {
            setTime(times);
        }
    }, [stateBool]);

    const handleSubmit = ( ) => {
        const formData = {}
        formData.hours = times
        orgById?.phoneNumber ? formData.phoneNumber = `${parseInt(orgById?.phoneNumber.replace(/[^0-9]/g, ""))}` : delete formData.phoneNumber;
        orgById?.email ? formData.email = orgById.email : delete formData.email;
        orgById?.description ? formData.description = orgById?.description : delete formData.description;
        dispatch(organizationActions.editOrganization(orgById?.id, formData));
    }

    return (
        <div className={`hourse-wrapper`}>
            <div className="wrapper-title">
                <p>Hours of Operation</p>
            </div>
            <div className={`hourse-box`}>
                {Object.keys(times).map(function (key, weekDayIndex) {
                    return (
                        <div key={weekDayIndex} className={`hours-card`}>
                            <p className={classes.dayName}>{shortDayNames(key)}</p>
                            <div className={classes.timeRowWrapper}>
                                {!times[key].length && (
                                    <div className={classes.addTime} onClick={() => addNewRow(key)}>
                                        <img src={Svg.AddTime} alt="icon" />
                                        <span>Add Hours</span>
                                    </div>
                                )}
                            </div>

                            <div>
                                {times[key].length
                                    ? times[key].map((item, index) => {
                                          return (
                                              <div key={index} className={`time-box`}>
                                                  <div className="flex hourse-form">
                                                      <ValidationInput
                                                          style={`time-input   `}
                                                          errorFalse={true}
                                                          // disabled={!item.isActive}
                                                          name="from"
                                                          value={item.from}
                                                          type="time"
                                                          onChange={(e) => {
                                                              changeData(e, index, key);
                                                          }}
                                                      />

                                                      <p className={`small-line`}>-</p>

                                                      <ValidationInput
                                                          style={`time-input`}
                                                          errorFalse={true}
                                                          // disabled={!item.isActive}
                                                          //   disabled={stateBool}
                                                          name="to"
                                                          value={item.to}
                                                          type="time"
                                                          onChange={(e) => {
                                                              changeData(e, index, key);
                                                          }}
                                                      />
                                                  </div>
                                                  <div className="flex fourse-submit">
                                                      <button
                                                          className={`remove-btn`}
                                                          onClick={() => {
                                                              removeRow(key, index);
                                                          }}>
                                                          Remove
                                                      </button>
                                                      <div className="check-box">
                                                          <FormControlLabel
                                                              name="available"
                                                              onChange={(e) => {
                                                                  changeData(e, index, key);
                                                              }}
                                                              control={<Checkbox />}
                                                              label={<span className={`available-text`}>Not Available</span>}
                                                          />
                                                      </div>
                                                  </div>
                                              </div>
                                          );
                                      })
                                    : ''}
                                {times[key].length ? (
                                    <button onClick={() => addNewRow(key)} className={`more-hours`}>
                                        Add more hours
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>


            <div className="info-feature">
                <div className="info-brn">
                    <CreateCancel title="Save" handleSubmit={handleSubmit} actionType={editActionType} />
                </div>
            </div>
        </div>
    );
};
