import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import InfoWindowEx from './markerContent';
import { mapStyles } from './styles';
import { Box, Typography } from '@material-ui/core';
import { CalendarToday, Room } from '@material-ui/icons';
import Router from 'next/router';
import { noImage } from '../../../singleEvent';
import { Colors } from '../../../../utils';
import { multiConverter } from '../../../../utils/dateConverter';

class MapMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            placeInfo: [],
            currentPosition: '',
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
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

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false,
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
            width: '100%',
            maxWidth: '1132px',
            height: '100%',
            maxHeight: '713px',
            paddingBottom: '20px',
        };
        const mobileStyle = {
            width: '100%',
            maxWidth: '1006px',
            height: '100%',
            maxHeight: '800px',
            paddingBottom: '20px',
        };
        const searchedMap = {
            height: '100%',
            maxHeight: '646px',
            paddingBottom: '20px',
        };

        const searchedMapMobile = {
            height: '70%',
            paddingBottom: '20px',
        };

        const lat =
            this.props.type === 'searched'
                ? this.props.Searched && this.props.Searched.lat
                : this.props.Searched && this.props.Searched.latitude !== 0
                ? this.props.Searched.latitude
                : this.props.pos
                ? this.props.pos.latitude
                : 34.052235;

        const lang =
            this.props.type === 'searched'
                ? this.props.Searched && this.props.Searched.lng
                : this.props.Searched && this.props.Searched.longitude !== 0
                ? this.props.Searched.longitude
                : this.props.pos
                ? this.props.pos.longitude
                : -118.243683;

        const handleViewDetails = () => {
            if (this.props.type === 'events') {
                Router.push(`singleEvent?eventid=${data.eventId}`);
            } else {
                if (data.type === 'EVENT') {
                    Router.push(`singleEvent?eventid=${data.id}`);
                }
                if (data.type === 'BUSINESS' || data.type === 'NON_PROFIT') {
                    Router.push(`singleOrganization?orgid=${data.id}`);
                }
            }
        };

        const data = this.state.placeInfo;
        const date = new Date(data.startDate);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return (
            <>
                <Map
                    style={
                        this.props.type === 'searched' ? { width: '45%' } : this.props.type === 'mobileSearched' ? { width: '100%' } : {}
                    }
                    google={this.props.google}
                    zoom={5}
                    onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
                    containerStyle={
                        this.props.type === 'searched'
                            ? searchedMap
                            : this.props.type === 'mobileSearched'
                            ? searchedMapMobile
                            : window.innerWidth > 1240 && window.innerWidth < 1920
                            ? styles
                            : mobileStyle
                    }
                    center={{
                        lat: lat,
                        lng: lang,
                    }}
                    initialCenter={{
                        lat: lat,
                        lng: lang,
                    }}
                    // zoomControl={true}
                    zoomControl={this.props.type === 'searched' ? true : this.props.type === 'mobileSearched'}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    streetViewControl={false}
                    disableDefaultUI={false}
                    scaleControl={false}
                    rotateControl={this.props.type === 'searched' ? true : this.props.type === 'mobileSearched'}>
                    {this.props.events &&
                        this.props.events.map(
                            (i, j) =>
                                // i.locationType === 'PHYSICAL' &&
                                i.address &&
                                i.address.lat &&
                                i.address.lng && (
                                    <Marker
                                        icon={{
                                            url: '/assets/icons/placeholderIcon.svg',
                                            anchor: new google.maps.Point(30, 30),
                                            scaledSize: new google.maps.Size(30, 30),
                                        }}
                                        position={{ lat: i.address.lat, lng: i.address.lng }}
                                        onClick={this.onMarkerClick}
                                        name={i}
                                        key={j}
                                    />
                                )
                        )}

                    <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <Box className={'markerContentWrapper'}>
                            <Box className={'markerContentInfo'}>
                                <Box className={'markerContentImg'}>
                                    <img
                                        src={
                                            data.image
                                                ? data.image.url
                                                : data?.images?.length > 0
                                                ? data.images[data.eventImage ? data.eventImage : 0].url
                                                : data?.images?.length > 0
                                                ? data.images[data.mainImage ? data.mainImage : 0].url
                                                : noImage.lgJPG
                                        }
                                        className="img-fluid"
                                        alt="..."
                                    />
                                </Box>

                                <Box>
                                    <Typography className={'markerContentTitle'}>
                                        {data && data.title && data.title.length > 15
                                            ? `${data.title.substring(0, 15)}...`
                                            : data.name
                                            ? data.name.length > 15
                                                ? `${data.name.substring(0, 15)}...`
                                                : data.name
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

                            <Box className={'markerContentFooter'}>
                                <Box className={'dateWrapper'}>
                                    {data.startDate && (
                                        <>
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
                                        </>
                                    )}
                                </Box>

                                <Box className={'markerContentButton'}>
                                    <button onClick={handleViewDetails}>View Details</button>
                                </Box>
                            </Box>
                        </Box>
                    </InfoWindowEx>
                </Map>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWYz3vb8vWqc4-NllBUJKYIUOWmRMQ9W0',
})(MapMobile);
