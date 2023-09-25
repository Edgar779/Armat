import React from 'react';
import { Controller } from 'react-hook-form';

export const CustomSelect = ({
    defaultValue,
    control,
    name,
    idInput,
    placeholder,
    rules,
    label,
    errMessage,
    listSelect,
    disabled,
    displayName,
    displayValue,
    ref,
    handleBlur,
    customOption,
}) => {
    /**
     * Hooks.
     */

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue ? defaultValue : null}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <div className="input-wrapper">
                    {label && (
                        <label style={{ color: disabled ? '#758EA6' : '#41586D' }} htmlFor={idInput} className="label">
                            {label}
                        </label>
                    )}
                    <div
                        className={'custom-select'}
                        style={
                            disabled ? {borderColor:'#8CA2B8'} :
                                error
                                ? { border: '1px solid #d03325' }
                                : label && value && value !== 'notSet'
                                ? { border: '1px solid #0E9594' }
                                : {}
                        }>
                        <div className={value ? 'custom-select-wrapper' : 'custom-select-placeholder-wrapper'}>
                            <select
                                onChange={(event) => onChange(event.target.value ? event : null) && handleBlur && handleBlur(event)}
                                onBlur={(e) => onBlur(e)}
                                value={value ? value : null}
                                defaultValue={defaultValue ? defaultValue : null}
                                id={idInput}
                                ref={ref}
                                name={name}
                                disabled={disabled}>
                                {placeholder && (
                                    <option value={null} style={{ color: 'red' }} hidden>
                                        {placeholder}
                                    </option>
                                )}
                                <option value={customOption ? 'notSet' : null} defaultValue={null} className="select-placeholder" />
                                {listSelect?.map((item, index) => (
                                    <option value={item?.[displayValue]} key={index}>
                                        <span style={{ marginRight: '4px' }}>{item?.[displayName]}&nbsp;</span>
                                        {/*<span className="space-option"></span>*/}
                                        <span>{item?.lastName ? item?.lastName : ''}</span>
                                    </option>
                                ))}
                            </select>
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
