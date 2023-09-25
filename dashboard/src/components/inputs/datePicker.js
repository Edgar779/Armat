import React, { useState, forwardRef } from 'react';
import { Controller } from 'react-hook-form';
import { Svg } from '../../assets/images';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const DatePickerInput = ({
    type,
    defaultValue,
    control,
    name,
    idInput,
    placeholder,
    rules,
    label,
    errMessage,
    handleDateChange,
}) => {
    /**
     * Date Picker Input.
     */

    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateChangeOne = (date) => {
        setSelectedDate(date);
        setShowCalendar(false);
    };

    const toggleCalendarOne = () => {
        setShowCalendar((prevState) => !prevState);
    };

    return (
        <Controller
            control={control ? control : null}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <div className="input-wrapper  date-picker">
                    {label && (
                        <label style={{ color: '#41586D' }} htmlFor={idInput} className="label">
                            {label}
                        </label>
                    )}
                    <div
                        style={
                            errMessage || error ? { border: '1px solid #d03325' } : label && value ? { border: '1px solid #0E9594' } : {}
                        }
                        className="custom-input">
                        {type === 'date' ? (
                            <>
                                <DatePicker selected={value} onChange={onChange} onBlur={onBlur} placeholderText={placeholder} showIcon />
                            </>
                        ) : (
                            <DatePicker
                                selected={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="HH:mm"
                                placeholderText={placeholder}
                            />
                        )}
                        <div className="">
                            {type === 'date' ? (
                                <img src={Svg.CalendarIcon} alt="Calendar-Icon" />
                            ) : (
                                <img src={Svg.TimeIcon} alt="Time-Icon" />
                            )}
                        </div>
                    </div>
                    <p className="custom-error-messages">
                        {errMessage ? errMessage : error?.type === 'required' ? 'This Field is required' : error?.message}
                    </p>
                </div>
            )}
        />
    );
};
