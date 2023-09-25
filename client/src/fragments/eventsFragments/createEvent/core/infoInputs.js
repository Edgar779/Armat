import { AddressInput, ClockInput, CreateEventInput, ErrMessage, InputTitle, MultipleSelect, SelectInput } from 'components';
import { timeZoneList } from './timeZone';
import moment from 'moment';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';

export const InfoInputs = ({
    classes,
    eventInfo,
    inputs,
    error,
    handleChangeInputs,
    handleSelectInput,
    EventTypeLocal,
    timeZoneInfo,
    setError,
    addressState,
    handleChange,
    startEndDateCheck,
    allDay,
    handleAllDay,
    selectedTag,
    handleChangeTags,
    tags,
    selectedCategories,
    handleChangeCategories,
    categories,
    backError,
}) => {
    return (
        <div>
            <div>{eventInfo && eventInfo.comment ? <p className={classes.commentText}>{eventInfo.comment}</p> : ''}</div>
            <div className={classes.inputs}>
                <div className={classes.firsSection}>
                    <CreateEventInput
                        tittleDis={inputs.title && inputs.title.length}
                        right={16}
                        placeholder={''}
                        name={'title'}
                        type={'text'}
                        max={80}
                        value={inputs.title}
                        text={'Title*'}
                        error={error === 'title'}
                        handleChange={handleChangeInputs}
                    />

                    <div className={classes.titleAndInput}>
                        <InputTitle text={'Event Type*'} />
                        <SelectInput
                            placeholder={''}
                            name={'locationType'}
                            error={error === 'locationType'}
                            EventType={inputs.locationType}
                            className={'CreateOrgsInputs'}
                            style={{ marginRight: '16px' }}
                            handleChangeSelectValue={(e) => handleSelectInput(e, 'locationType')}
                            selectData={eventInfo ? (EventTypeLocal === 'Physical' ? ['Virtual'] : ['Physical']) : ['Virtual', 'Physical']}
                            Ev={eventInfo}
                            type={'location'}
                        />
                    </div>
                </div>

                <div className={classes.EventType} style={{ display: 'flex', width: '100%' }}>
                    <div className={classes.EventTypeSelectInput}>
                        <InputTitle text={'Time Zone*'} />
                        <SelectInput
                            placeholder={''}
                            error={error === 'timezoneOffset'}
                            disablePortal={true}
                            type={'timezone'}
                            name={'timezoneOffset'}
                            Ev={eventInfo && (Array.isArray(timeZoneInfo) === true ? timeZoneInfo[0].text : inputs.timezoneOffset)}
                            // Ev={eventInfo && (Array.isArray(inputs.timeZone) === true ? inputs.timeZone[0].text : inputs.timeZone)}
                            EventType={
                                eventInfo
                                    ? Array.isArray(timeZoneInfo) === true
                                        ? timeZoneInfo[0].text
                                        : inputs.timezoneOffset
                                    : inputs.timezoneOffset
                            }
                            className={'CreateOrgsInputs'}
                            style={{ marginRight: '16px' }}
                            handleChangeSelectValue={(ev) => handleSelectInput(ev, 'timezoneOffset')}
                            selectData={timeZoneList}
                        />
                    </div>
                    <div className={classes.EventLocationSelectInput}>
                        <div className={classes.titleAndInputDate} style={{ marginRight: '16px' }}>
                            <CreateEventInput
                                tittleDis={inputs.startDate && inputs.startDate.length}
                                right={16}
                                type={'date'}
                                text={'Start Date*'}
                                name={'startDate'}
                                // max={eventInfo ? moment(inputs.endDate).format('YYYY-MM-DD') : inputs.endDate}
                                value={eventInfo ? moment(inputs.startDate).format('YYYY-MM-DD') : inputs.startDate}
                                error={error === 'startDate'}
                                handleChange={handleChangeInputs}
                            />
                        </div>

                        <div className={classes.titleAndInput}>
                            <InputTitle text={'Start Time*'} />
                            <ClockInput
                                handleDown={() => error === 'startTime' && setError('')}
                                error={error === 'startTime'}
                                handle={handleChangeInputs}
                                name={'startTime'}
                                value={inputs.startTime ? inputs.startTime : '.."..'}
                            />
                        </div>
                    </div>
                </div>

                <div className={classes.KeyboardDatePicker}>
                    <div className={classes.titleAndInput}>
                        <InputTitle text={'Location*'} />
                        <AddressInput
                            placeText={' '}
                            setError={() => error === 'address' && setError('')}
                            error={error === 'address'}
                            Value={eventInfo ? inputs.address && inputs.address.formattedAddress : inputs.address ? inputs.address : ''}
                            handleChangeValue={(ev) => handleSelectInput(ev, 'address')}
                            handleSelectValue={(ev) => handleSelectInput(ev, 'address')}
                        />
                        <FormControlLabel
                            style={{ width: '165px' }}
                            className={classes.checkClass}
                            control={<Checkbox color="primary" checked={addressState} onChange={handleChange} name="address" />}
                            label="To Be Determined"
                        />
                    </div>

                    <div style={{ marginTop: '0px' }} className={classes.ClockInput}>
                        <div className={classes.titleAndInputDate} style={{ marginRight: '16px' }}>
                            <CreateEventInput
                                tittleDis={inputs.endDate && inputs.endDate.length}
                                type={'date'}
                                marginTop={'4px'}
                                text={'End Date*'}
                                name={'endDate'}
                                error={error === 'endDate' || backError?.error === 'End Date is less than start date'}
                                min={eventInfo ? moment(inputs.startDate).format('YYYY-MM-DD') : inputs.startDate}
                                value={eventInfo ? moment(inputs.endDate).format('YYYY-MM-DD') : inputs.endDate}
                                handleChange={handleChangeInputs}
                            />
                            <FormControlLabel
                                style={{ width: '75px' }}
                                className={classes.checkClass}
                                control={<Checkbox checked={startEndDateCheck} onChange={handleChange} name="start" />}
                                label="TBD"
                            />
                        </div>

                        <div className={classes.titleAndInput}>
                            <InputTitle text={'End Time'} />
                            <ClockInput
                                handleDown={() => error === 'endTime' && setError('')}
                                error={error === 'endTime'}
                                handle={handleChangeInputs}
                                marginTop={'4px'}
                                name={'endTime'}
                                value={inputs.endTime ? inputs.endTime : '.."..'}
                            />
                            <FormControlLabel
                                style={{ width: '90px' }}
                                className={classes.checkClass}
                                control={<Checkbox checked={allDay} onChange={handleAllDay} name="start" />}
                                label="All Day"
                            />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '8px' }} className={classes.EventType}>
                    <div className={classes.selectTag}>
                        <InputTitle text={'Tags'} />
                        <MultipleSelect
                            error={error === 'tags'}
                            disablePortal={true}
                            handleChange={handleChangeTags}
                            option={tags}
                            value={selectedTag}
                        />
                    </div>
                    <div className={classes.selectCategory}>
                        <InputTitle text={'Event Category'} />
                        <MultipleSelect
                            error={error === 'categories'}
                            disablePortal={true}
                            handleChange={handleChangeCategories}
                            option={categories}
                            value={selectedCategories}
                        />
                    </div>
                </div>
            </div>
            {backError?.error === 'End Date is less than start date' && (
                <ErrMessage text={'End Date is less than start date'} style={{ marginTop: '10px' }} />
            )}
        </div>
    );
};
