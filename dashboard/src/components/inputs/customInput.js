import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Svg } from "../../assets";

export const CustomInput = ({
    type,
    defaultValue,
    control,
    name,
    idInput,
    placeholder,
    rules,
    label,
    describedby,
    imgSrc,
    errMessage,
    disabled,
    min,
    max,
    maxLength,
    step,
                              required,
                              noIcon,
                              color,
                              styles,
                              noTop,
                              handleChange
}) => {


    const [openEye, setOpenEye] = useState(false);

    return (
        <Controller
            control={control ? control : null}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <div className="input-wrapper">
                    {label && (
                        <label style={{ color:  disabled ? '#758EA6' : color ? '#494949' : '#222222CC', ...styles }} htmlFor={idInput} className="label">
                            {label} {required && <span style={{color:'#FF453A', marginLeft:'-3px'}}>*</span>}
                        </label>
                    )}
                    <div
                        style={
                            disabled
                                ? { borderColor: '#8CA2B8' }
                                : errMessage || error
                                ? { border: '1px solid #d03325' }
                                : label && value
                                ? { border: '1px solid #0E9594' }
                                : {}
                        }
                        className={`custom-input ${noTop ? 'custom-input-no-top' : ''}`}
                    >
                        {imgSrc && (
                            <div className={'input-icon'}>
                                <img src={imgSrc} alt="icon" />
                            </div>
                        )}
                        {type === 'email' && !noIcon && (
                            <div className="email-input">
                                <img src={Svg.SmsInputIcon} alt="SmsInputIcon" />
                            </div>
                        )}
                        <input
                            onWheel={ event => event.currentTarget.blur() }
                            onChange={(e) => {
                              onChange(e);
                              handleChange && handleChange(e)
                            }
                            }
                            onBlur={onBlur}
                            value={value}
                            type={openEye ? 'text' : type}
                            className="input-form-control"
                            id={idInput}
                            aria-describedby={describedby}
                            placeholder={placeholder}
                            disabled={disabled}
                            step={step === 'numeric' ? 0.01 : 0}
                            min={min ? min : 0}
                            max={max ? max : ''}
                            maxLength={maxLength ? maxLength : ''}
                        />
                        {type === 'password' && (
                            <div className="password-input" onClick={() => setOpenEye(!openEye)}>
                                {openEye ? (
                                    <img src={error?.type ? Svg.EyeRedOpen : Svg.EyeOpen} alt="Eye Open" />
                                ) : (
                                    <img src={error?.type ? Svg.EyeRedClose : Svg.EyeClose} alt="Eye Close" />
                                )}
                            </div>
                        )}
                    </div>
                    <p className="custom-error-messages">
                        {errMessage ? errMessage : error?.type === 'required' ? 'This Field is required' : error?.message}
                    </p>
                </div>
            )}
        />
    );
};
