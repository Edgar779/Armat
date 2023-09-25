import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Svg } from "../../assets";

export const InputNoForm = ({
                              onChange, disabled, label, errMessage, value, idInput, placeholder, type,name, required
                            }) => {

  return (

        <div className="input-wrapper">
          {label && (
            <label style={{ color: disabled ? '#758EA6' : '#222222CC' }} htmlFor={idInput} className="label">
              {label} {required && <span style={{color:'#FF453A', marginLeft:'-3px'}}>*</span>}
            </label>
          )}
          <div
            style={
              disabled ? { borderColor: '#8CA2B8' } :
                errMessage ? { border: '1px solid #d03325' } :
                  label && value ? { border: '1px solid #0E9594' }
                    : {}
            }
            className="custom-input">
            {/*{imgSrc && (*/}
            {/*  <div className={'input-icon'}>*/}
            {/*    <img src={imgSrc} alt="icon" />*/}
            {/*  </div>*/}
            {/*)}*/}
            {/*{type === 'email' && !noIcon && (*/}
            {/*  <div className="email-input">*/}
            {/*    <img src={Svg.SmsInputIcon} alt="SmsInputIcon" />*/}
            {/*  </div>*/}
            {/*)}*/}
            <input
              onChange={onChange}
              value={value}
              type={ type}
              className="input-form-control"
              id={idInput}
              name={name}
              // aria-describedby={describedby}
              placeholder={placeholder}
              disabled={disabled}
              // step={step === 'numeric' ? 0.01 : 0}
              // min={min ? min : 0}
              // max={max ? max : ''}
              // maxLength={maxLength ? maxLength : ''}
            />

          </div>
          <p className="custom-error-messages">
            {errMessage ? errMessage : ''}
          </p>
        </div>

  );
};
