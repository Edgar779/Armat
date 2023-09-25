import React, { useEffect, useState } from "react";
import PlacesAutocomplete from 'react-places-autocomplete';
import { ErrMessage } from '../messages';

export const AddressInput = ({ disabled, errorBoolean, backError, onTrigger, enteredValue, errMessage, error, label, color, styles, noErr }) => {
    const [address, setAddress] = useState(enteredValue || '');

    useEffect(() => {
        if (enteredValue && !address) {
            setAddress(enteredValue?.formattedAddress ? enteredValue?.formattedAddress : enteredValue?.address);
        }
    }, [enteredValue]);

    const handleChangeAddress = (value) => {
        setAddress(value);
        onTrigger(value);
    };

    const handleSelect = async (value) => {
        setAddress(value);
        onTrigger(value);
    };

    const placeholder = enteredValue ? enteredValue : 'Service Location*';

    return (
        <div className="input-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <PlacesAutocomplete
                  value={address}
                  onChange={handleChangeAddress}
                  onSelect={(ev) => handleSelect(ev)}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div className="address-custom-input">
                            <p className="title" style={{color:color? color : '' , ...styles}}>{label}</p>
                            <input
                                className="address-input"
                                style={errorBoolean ? { borderColor: '#d03325' } : enteredValue ? { borderColor: '#0E9594' } : {}}
                                {...getInputProps({
                                    placeholder: placeholder,
                                    disabled: disabled,
                                    // onBlur: (e) => {
                                    //     handleChangeAddress(e.target.value);
                                    // },
                                })}
                            />
                            {!noErr &&
                              <ErrMessage
                                text={
                                    errorBoolean === 'Unable to verify the address' ? 'Unable to verify the address' :
                                      errorBoolean ? 'Input is not field' :
                                        errMessage ? errMessage :
                                          error?.type === 'required' ? 'This Field is required' :
                                            backError?.error ? backError?.error : ''
                                }
                              />
                            }
                            {loading && <div className="address-loading-class">Loading...</div>}
                            <div className="address-custom-input-wrapper">
                                {suggestions.map((suggestion, index) => {
                                    const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                    const style = suggestion.active
                                        ? { margin: '15px', cursor: 'pointer' }
                                        : { margin: '15px', cursor: 'pointer' };
                                    return (
                                        <div
                                            key={index}
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}>
                                            <div>
                                                <span>{suggestion.description}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            </div>
        </div>
    );
};
