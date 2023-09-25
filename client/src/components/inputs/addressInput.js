import React, { useEffect, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { inputsStyle } from './styles';
import axios from 'axios';
import { Icon } from '../icon';
import { SVGNames } from '../../constants';

export const AddressInput = ({ handleChangeValue, handleSelectValue, Value, error, setError, type, handleSuggestions, placeText }) => {
    const classes = inputsStyle();
    const [address, setAddress] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');

    useEffect(() => {
        if (Value) {
            setCurrentAddress(Value);
        } else {
            setCurrentAddress('');
            setAddress('');
        }
    }, [Value]);

    const handleChange = (value) => {
        setAddress(value);
        handleChangeValue && handleChangeValue(value);
        setError && setError();

        if (type === 'searching') {
            const address = { address: value };
            axios.post(`/address`, address).then((res) => {});
            // handleSuggestions && handleSuggestions(suggestions)
        }
    };

    const handleSelect = (value) => {
        handleSelectValue(value);
        setAddress(value);
    };

    const placeholder = currentAddress ? currentAddress : placeText ? placeText : 'Search address...';

    return (
        <PlacesAutocomplete
            searchOptions={type === 'searching' ? { types: ['(cities)'], country: ['ca', 'us'] } : {}}
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div style={{ cursor: 'pointer', width: '100%' }}>
                    <input
                        // value={Value}
                        className={
                            type === 'searching'
                                ? classes.SearchAddressSearching
                                : error
                                ? classes.ErrorSearchAddress
                                : classes.SearchAddress
                        }
                        {...getInputProps({
                            placeholder: placeholder,
                        })}
                    />
                    <div className={type === 'searching' ? classes.searchAddressDescriptionSearch : classes.searchAddressDescription}>
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion, index) => {
                            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer', borderRadius: '6px', width: '100%' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer', borderRadius: '6px', width: '100%' };
                            return (
                                <div
                                    key={index}
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}>
                                    <div
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        className={
                                            type === 'searching'
                                                ? classes.searchAddressDescriptionTextSearch
                                                : classes.searchAddressDescriptionText
                                        }>
                                        <div style={{ marginRight: '6px' }}>
                                            <Icon
                                                name={SVGNames.LocationIcon}
                                                style={{ marginRight: '8px', marginTop: '10px' }}
                                                width={'21px'}
                                                height={'23px'}
                                            />
                                        </div>

                                        <p>{suggestion.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default AddressInput;
