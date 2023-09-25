import React from 'react';

export const SelectNoForm = ({
                               defaultValue,
                               name,
                               idInput,
                               placeholder,
                               label,
                               errMessage,
                               listSelect,
                               disabled,
                               displayName,
                               displayValue,
                               customOption,
                               value,
                               onChange,
                               color,
                             }) => {

  return (
        <div className="input-wrapper">
          {label && (
            <label style={{ color: disabled ? '#758EA6' : color ? color : '#41586D' }} htmlFor={idInput} className="label">
              {label}
            </label>
          )}
          <div
            className={'custom-select'}
            style={
              disabled ? {borderColor:'#8CA2B8'} :
                errMessage
                  ? { border: '1px solid #d03325' }
                  : label && value && value !== 'notSet'
                    ? { border: '1px solid #0E9594' }
                    : {}
            }>
            <div className={value ? 'custom-select-wrapper' : 'custom-select-placeholder-wrapper'}>
              <select
                onChange={onChange}
                value={value ? value : null}
                defaultValue={defaultValue ? defaultValue : null}
                id={idInput}
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
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="custom-error-messages">
            {errMessage ? errMessage : ''}
          </p>
        </div>
  );
};
