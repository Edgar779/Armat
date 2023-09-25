import { theme } from 'theme';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import { mapStyles } from '../../style';
import { Box, Typography } from '@material-ui/core';
import { CalendarToday, Room } from '@material-ui/icons';
import InfoWindowEx from '../../../../eventsFragments/events/core/markerContent';
import { Colors } from 'utils';
import { multiConverter } from '../../../../../utils/dateConverter';
import { noImage } from '../../../singleEventHeader';

class MapLoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {
                latitude: 41.477052,
                longitude: 41.515259,
            },
            selectedPlace: {},
            lat: '',
            lng: '',
            currentPosition: '',
            showingInfoWindow: false,
            placeInfo: [],
        };
    }

    onMapClicked = (props, marker) => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false,
                selectedPlace: props,
                placeInfo: marker.name,
            });
    };

    onClose = () => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                placeInfo: [],
            });
        }
    };

    onMarkerClick = (props, marker) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            placeInfo: marker.name,
        });
    };

    _mapLoaded(mapProps, map) {
        map.setOptions({
            styles: mapStyles,
        });
        navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng };
            this.setState({ currentPosition: pos });
        });
    }

    render() {
        const styles = {
            width: '93%',
            height: '320px',
            maxWidth: '477px',
            borderRadius: '20px',
            border: '3px solid #FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        };
        const bigStyle = {
            width: '100%',
            height: '388px',
            maxWidth: '635px',
            borderRadius: '20px',
            border: '3px solid #FFFFFF',
            boxShadow: '0px 2px 6px #0000001A',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        };

        const lat = this.props.data.address ? (this.props.data.address.lat ? this.props.data.address.lat : 34.052235) : '';
        const lang = this.props.data.address ? (this.props.data.address.lng ? this.props.data.address.lng : -118.243683888888888) : '';
        const { data } = this.props;

        return (
            <>
                <div>
                    <Map
                        style={{ borderRadius: 16, border: '4px solid #FFFFFF' }}
                        containerStyle={window.innerWidth > 1400 ? bigStyle : styles}
                        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                        google={this.props.google}
                        zoom={14}
                        center={{
                            lat: lat,
                            lng: lang,
                        }}
                        initialCenter={{
                            lat: lat,
                            lng: lang,
                        }}
                        zoomControl={true}
                        fullscreenControl={false}
                        mapTypeControl={false}
                        streetViewControl={false}>
                        <Marker
                            icon={{
                                url: '/assets/icons/placeholderIcon.svg',
                                anchor: new google.maps.Point(30, 30),
                                scaledSize: new google.maps.Size(30, 30),
                            }}
                            name="Marker 3"
                            position={{ lat: lat, lng: lang }}
                            onClick={this.onMarkerClick}/>
                        <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                            <Box className={'markerContentWrapper'}>
                                <Box className={'markerContentInfo'}>
                                    <Box className={'markerContentImg'}>
                                        <img
                                            src={
                                                data?.images?.length > 0
                                                    ? data.images[data.eventImage ? data.eventImage : 0].url
                                                    : noImage.lgJPG
                                            }
                                            className="img-fluid"
                                            alt="loading"
                                        />
                                    </Box>

                                    <Box>
                                        <Typography className={'markerContentTitle'}>
                                            {data && data.title && data.title.length > 15
                                                ? `${data.title.substring(0, 15)}...`
                                                : data.title}
                                        </Typography>

                                        <Box className={'addressWrapper'}>
                                            <Room
                                                style={{
                                                    color: Colors.ThemeGreen,
                                                    width: '12px',
                                                    height: '20px',
                                                    marginRight: '6px',
                                                }}
                                            />
                                            <Typography className={'markerContentAddress'}>
                                                {data && data.address
                                                    ? data.address.formattedAddress && data.address.formattedAddress.length > 20
                                                        ? `${data.address.formattedAddress.slice(0, 20)}...`
                                                        : data.address.formattedAddress
                                                    : ''}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {data.startDate && (
                                    <Box className={'markerContentFooter'}>
                                        <Box className={'dateWrapper'}>
                                            <CalendarToday
                                                style={{
                                                    color: Colors.ThemeGreen,
                                                    width: '14px',
                                                    height: '12px',
                                                    marginRight: '6px',
                                                }}
                                            />
                                            <Typography className={'markerFullDate'}>
                                                {multiConverter(data.startDate, data.startTime, data.timezoneOffset, 'MM-DD-YYYY')}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </InfoWindowEx>
                    </Map>
                </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWYz3vb8vWqc4-NllBUJKYIUOWmRMQ9W0',
})(MapLoc);
