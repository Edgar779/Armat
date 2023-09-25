import React, { useState } from 'react';

export const SearchByAddress = ({}) => {
    const InnDaDataRequest = async (ev) => {
        const googlePlacesApi = 'AIzaSyDGaZoGDBvz6rGPnTvIxurppDmBla4LcHw';
        const baseUrl = 'https://maps.googleapis.com/maps/api';
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=America&key=AIzaSyDGaZoGDBvz6rGPnTvIxurppDmBla4LcHw`;

        let options = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };
        fetch(url, options)
            // .then(response => response.json())
            .then((result) => console.log(result, 'result'))
            .catch((error) => console.log('error', error));
    };

    return (
        <div>
            <input onChange={InnDaDataRequest} />
        </div>
    );
};
