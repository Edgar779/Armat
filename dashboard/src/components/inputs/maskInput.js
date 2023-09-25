import React from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

export const MaskInput = ({
    type,
    defaultValue,
    control,
    name,
    idInput,
    placeholder,
    rules,
    label,
    describedby,
    errMessage,
    disabled,
    mask,
    styles,
    errMessageToShow,
    backError,
                            color
}) => {
    /**
     * Mask Input.
     */

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <div className="input-wrapper">
                    {label && (
                        <label style={{ color: color ? color : '#41586D', ...styles }} htmlFor={idInput} className="label">
                            {label}
                        </label>
                    )}
                    <div
                        style={disabled ? {borderColor:'#8CA2B8'} : error  || errMessageToShow ? { border: '1px solid #d03325' } : label && value ? { border: '1px solid #0E9594' } : {}}
                        className="custom-input  custom-mask">
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', ...styles }}>
                            <InputMask mask={mask ? mask : '(999) 999-9999'} value={value} disabled={disabled} onChange={onChange}>
                                {() => (
                                    <input
                                        disabled={disabled}
                                        value={value}
                                        type={type}
                                        className="input-form-control mask-input"
                                        id={idInput}
                                        aria-describedby={describedby}
                                        placeholder={placeholder}
                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                    <p className="custom-error-messages">
                        {errMessageToShow ? errMessageToShow : error?.type === 'required' ? 'This Field is required' : ''}
                    </p>
                </div>
            )}
        />
    );
};
