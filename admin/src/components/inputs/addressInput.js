import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { inputsStyle } from './styles';

export const AddressInput = ({ handleChangeValue, handleSelectValue, disabled, disableLabels, Value, error, placeText }) => {
    const classes = inputsStyle();
    const [address, setAddress] = useState('');
    const handleChange = (value) => {
        setAddress(value);
        handleChangeValue(value);
    };

    const handleSelect = (value) => {
        handleSelectValue(value);
        setAddress(value);
    };


    const disable = false
    const placeholder = Value ? Value : placeText ? placeText  : 'SearchPage address...'
    return (
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div style={{cursor:'pointer'}}>
                    <input
                        className={disable || disableLabels ? classes.SearchAddressDisable :
                            error ? classes.ErrorSearchAddress :  classes.SearchAddress}
                        {...getInputProps({
                            placeholder: placeholder,
                            disabled :disableLabels ? disableLabels : disable,
                        })}
                    />
                     <div className={classes.searchAddressDescription}>
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion, index) => {
                            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                                <div
                                    key={index}
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style,
                                    })}>
                                    <span className={classes.searchAddressDescriptionText}>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};
