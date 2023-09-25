import React, { useEffect, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
// import { inputsStyle } from './styles';
import axios from 'axios';
import { inputsStyle } from '../../../components/inputs/styles';
import { Icon } from '../../../components/icon';
import { SVGNames } from '../../../constants';
import { useRouter } from 'next/router';
import { MiniLoader } from '../../../components';

export const SearchAddress = ({
    handleChangeValue,
    handleSelectValue,
    Value,
    setError,
    type,
    handleOpenCLoseAddress,
    addressShow,
    handleCloseCurrent,
}) => {
    const classes = inputsStyle();
    const [address, setAddress] = useState('');
    const router = useRouter();
    const [current, setCurrent] = useState('');
    const [loader, setLoader] = useState(false);
    // const [denied, setDenied] = useState(true);

    const handleChange = (value) => {
        setCurrent('');
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

    // useEffect(() => {
    //     navigator.geolocation.watchPosition(
    //         function (position) {
    //             setDenied(true);
    //         },
    //         function (error) {
    //             if (error.code === error.PERMISSION_DENIED) setDenied(false);
    //         }
    //     );
    // }, []);

    const handleGet = () => {
        if ('geolocation' in navigator) {
            setLoader(true);
            setCurrent('Current Location');
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                const data = `${lat} ${lng}`;
                axios.post(`/address`, { address: data }).then((res) => {
                    handleCloseCurrent();
                    setLoader(false);
                    router.push({
                        pathname: '/search',
                        query: {
                            lat: lat + '',
                            lng: lng + '',
                            address: res?.data?.formattedAddress,
                            zoom: 5000,
                        },
                    });
                });
            });
        } else {
            setLoader(false);
        }
    };

    const placeholder = current ? current : Value ? Value : 'Search address...';

    return (
        <div style={{ width: '100%' }}>
            <PlacesAutocomplete
                searchOptions={{ types: ['(cities)'], country: ['ca', 'us'] }}
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div style={{ cursor: 'pointer', width: '100%' }}>
                        <input
                            onClick={handleOpenCLoseAddress}
                            // value={Value}
                            className={classes.SearchAddressSearching}
                            {...getInputProps({
                                placeholder: placeholder,
                            })}
                        />
                        <div className={classes.searchAddressDescriptionSearch}>
                            <div>
                                {addressShow && (
                                    <div className={classes.showWrapper}>
                                        <button onClick={handleGet} className={classes.etCurrent}>
                                            {loader === true ? (
                                                <MiniLoader />
                                            ) : (
                                                <Icon name={SVGNames.CurrentLocation} width={'24px'} height={'24px'} />
                                            )}
                                            <p>Current Location</p>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div style={{ paddingLeft: '56px' }}>
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
                                            <div>
                                                <span className={classes.searchAddressDescriptionTextSearch}>{suggestion.description}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
};

export default SearchAddress;
