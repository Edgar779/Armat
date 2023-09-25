import React from 'react';
import { Controller } from 'react-hook-form';

export const CustomTextArea = ({
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
    className,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <div className="input-wrapper">
                    {label && (
                        <label style={{ color: '#41586D' }} htmlFor={idInput} className="label">
                            {label}
                        </label>
                    )}
                    <div
                        style={error ? { border: '1px solid #d03325' } : label && value ? { border: '1px solid #0E9594' } : {}}
                        className="custom-area">
                        <textarea
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            rows={6}
                            cols={60}
                            id={idInput}
                            aria-describedby={describedby}
                            placeholder={placeholder}
                            disabled={disabled}
                            className={`text-area input-form-control ${className}`}></textarea>
                    </div>
                    <p className="custom-error-messages">
                        {errMessage ? errMessage : error?.type === 'required' ? 'This Field is required' : error?.message}
                    </p>
                </div>
            )}
        />
    );
};
