import React, { useEffect, useState, Fragment } from 'react';
import { CustomInput, AddressInput, MaskInput, CreateCancel } from 'components';
import { Images, Svg } from 'assets';
import { TimeInput, HoursOperation } from 'fragments';
import { Card, Checkbox, Grid, FormControlLabel } from '@mui/material';

export const HourseFragment = () => {
    /**
     * Hooks.
     */

    // Monday.
    const [monShow, setMonShow] = useState(false);
    const [monList, setMonList] = useState([]);
    // Tuesday.
    const [tunShow, setTunShow] = useState(false);
    // Wednesday.
    const [wedShow, setWedShow] = useState(false);
    // Thursday.
    const [thuShow, setThuShow] = useState(false);
    // Friday.
    const [friShow, setFriShow] = useState(false);
    // Saturday.
    const [satShow, setSatShow] = useState(false);
    // Sunday.
    const [sunShow, setSunShow] = useState(false);
    // List.
    const [hoursList, setHourseList] = useState([]);
    const [eventInfo, setEventInfo] = useState('');

    const handleAddTime = () => {};

    const addMoreHousre = () => {};

    const handelMonShow = () => {
        setMonShow(true);
    };
    const handleTunShow = () => {
        setTunShow(true);
    };
    const handelWedShow = () => {
        setWedShow(true);
    };
    const handelThuShow = () => {
        setThuShow(true);
    };
    const handelFriShow = () => {
        setFriShow(true);
    };
    const handelSatShow = () => {
        setSatShow(true);
    };

    const handelSunShow = () => {
        setSunShow(true);
    };

    const cancelBtn = () => {
        setMonShow(false);
        setTunShow(false);
        setWedShow(false);
        setThuShow(false);
        setFriShow(false);
        setSatShow(false);
        setSunShow(false);
    };

    useEffect(() => {}, [hoursList]);

    return (
        <div className="basic-info">
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className="subtitle-box">
                        <h3 className="subtitle">Hours of Operation</h3>
                    </div>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} md={8}>
                    {/* Monday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">MON</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {monShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelMonShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Tuesday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">TUE</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {tunShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handleTunShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Wednesday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">WED</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {wedShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelWedShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Thursday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">THU</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {thuShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelThuShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Friday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">FRI</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {friShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelFriShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Saturday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">SAT</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {satShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelSatShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                    {/* Sunday */}
                    <div className="time-container">
                        <Card className="card-day">
                            <Grid display={'flex'} flexDirection={'row'} gap={1} className="">
                                <Grid sx={12} md={1}>
                                    <p className="day-title">SUN</p>
                                </Grid>
                                <Grid sx={12} md={11}>
                                    {sunShow ? (
                                        <Fragment>
                                            <HoursOperation addMoreHousre={addMoreHousre} />
                                        </Fragment>
                                    ) : (
                                        <button type="button" className="add-btn" onClick={handelSunShow}>
                                            <img src={Svg.AddTime} alt="Add Time" />
                                            <span className="add-title"> Add Hours </span>
                                        </button>
                                    )}
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </Grid>
            </Grid>

            <div className="info-feature">
                <div className="info-brn">
                    <CreateCancel title="Save" cancelBtn={cancelBtn} />
                </div>
            </div>
        </div>
    );
};
