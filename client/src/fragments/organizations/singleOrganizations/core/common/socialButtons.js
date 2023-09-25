import React, { useState } from 'react';

import { TypedButton } from './typedButton';
import { inputsStyle } from '../../../../../components/inputs/styles';
import { CreateEventStyle } from '../../../../eventsFragments/createEvent/core';
import { CommonStyle } from './styles';
import { CloseButton, Icon, MiniLoader } from 'components';
import { SVGNames } from 'constants/index';
import axios from 'axios';
import { Colors } from '../../../../../utils';

export const SocialButtons = ({ id, handleClose, modalType, handleGetNewInfo, reviews }) => {
    const classes = CreateEventStyle();
    const inputClasses = inputsStyle();
    const [clicked, setClicked] = useState({});

    const [inputs, setInputs] = useState(
        reviews
            ? {
                  instagram: reviews?.instagramLink,
                  twitter: reviews?.twitterLink,
                  youtube: reviews?.youtubeLink,
                  facebook: reviews?.facebookLink,
                  google: reviews?.googleLink,
                  yelp: reviews?.yelpLink,
                  googlePlaceId: reviews?.googleReviews?.entityId,
                  yelpBusinessId: reviews?.yelpReviews?.entityId,
              }
            : {}
    );

    const [loading, setLoading] = useState(false);
    const handleOpen = (ev) => setClicked(ev);

    const customStyle = CommonStyle();

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
        // error === e.target.name && setError('')
    };

    const handleSave = () => {
        setLoading(true);
        axios
            .patch(`/orgs/${id}/socials`, inputs, { auth: true })
            .then(() => {
                setLoading(false);
                handleClose();
                handleGetNewInfo();
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    return (
        <div className={customStyle.modalWrapperBack}>
            <CloseButton handleClick={handleClose} />
            <div className={customStyle.modalWrapper} style={{ background: 'white' }}>
                <div className={customStyle.titleAndIcon}>
                    <Icon name={modalType === 'review' ? SVGNames.ReviewIcon : SVGNames.SociallinksIcon} color={Colors.ThemeGreen} />
                    <p>{modalType === 'review' ? 'Connect Your Reviews' : 'Add Social Media Links'}</p>
                </div>
                <p className={customStyle.info}>
                    {modalType === 'review'
                        ? 'Add the google place ID or the yelp business ID of the organization to display reviews from these platforms'
                        : 'Connect the social media profiles of the organization to Armat by simply copying the links'}
                </p>

                <div className={classes.buttonsWrap}>
                    {modalType === 'review' ? (
                        <div className={customStyle.customButtonsWrapper}>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.googlePlaceId}
                                    name={'googlePlaceId'}
                                    placeholder={'Add Google Place ID'}
                                />
                                <TypedButton
                                    inputs={inputs.googlePlaceId}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('googlePlaceId')}
                                    name={'googlePlaceId'}
                                    type={'googlePlaceId'}
                                    text={'Google'}
                                />
                            </div>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.yelpBusinessId}
                                    name={'yelpBusinessId'}
                                    placeholder={'Add Yelp Business ID'}
                                />
                                <TypedButton
                                    inputs={inputs.yelpBusinessId}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('yelpBusinessId')}
                                    name={'yelpBusinessId'}
                                    type={'yelpBusinessId'}
                                    text={'Yelp'}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className={customStyle.customButtonsWrapper}>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.facebook}
                                    name={'facebook'}
                                    placeholder={'Add Facebook URL'}
                                />
                                <TypedButton
                                    inputs={inputs.facebook}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('facebook')}
                                    name={'facebook'}
                                    type={'facebook'}
                                    text={'Facebook'}
                                />
                            </div>

                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.instagram}
                                    name={'instagram'}
                                    placeholder={'Add Instagram URL'}
                                />
                                <TypedButton
                                    inputs={inputs.instagram}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('instagram')}
                                    name={'instagram'}
                                    type={'instagram'}
                                    text={'Instagram'}
                                />
                            </div>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.twitter}
                                    name={'twitter'}
                                    placeholder={'Add Twitter URL'}
                                />
                                <TypedButton
                                    inputs={inputs.twitter}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('twitter')}
                                    name={'twitter'}
                                    type={'twitter'}
                                    text={'Twitter'}
                                />
                            </div>

                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.youtube}
                                    name={'youtube'}
                                    placeholder={'Add Youtube URL'}
                                />
                                <TypedButton
                                    inputs={inputs.youtube}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('youTube')}
                                    name={'youTube'}
                                    type={'youTube'}
                                    text={'YouTube'}
                                />
                            </div>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.google}
                                    name={'google'}
                                    placeholder={'Add Google URL'}
                                />
                                <TypedButton
                                    inputs={inputs.google}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('googlePlaceId')}
                                    name={'googlePlaceId'}
                                    type={'googlePlaceId'}
                                    text={'Google'}
                                />
                            </div>
                            <div>
                                <input
                                    className={inputClasses.createEventInputSmall}
                                    onChange={handleChange}
                                    value={inputs.yelp}
                                    name={'yelp'}
                                    placeholder={'Add Yelp URL'}
                                />
                                <TypedButton
                                    inputs={inputs.yelp}
                                    clicked={clicked}
                                    handleClick={() => handleOpen('yelpBusinessId')}
                                    name={'yelpBusinessId'}
                                    type={'yelpBusinessId'}
                                    text={'Yelp'}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={customStyle.footerSection}>
                <button className={customStyle.clearAll} onClick={handleClose}>
                    Clear All
                </button>
                <button className={customStyle.save} onClick={handleSave}>
                    {loading === true ? <MiniLoader color={'white'} /> : 'Save'}
                </button>
            </div>
        </div>
    );
};
