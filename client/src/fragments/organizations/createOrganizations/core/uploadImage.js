import React, { useState } from 'react';
import { CreateEventStyle } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { Icon, MiniLoader } from 'components';
import { SVGNames } from 'constants/index';
import Carousel from 'nuka-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Colors} from "../../../../utils";

export const UploadImage = ({ handleChange, handleClearImg, imgSrc, error, handleSelectIndex, eventInfo, loaderUpload }) => {
    const classes = CreateEventStyle();
    const [index, setIndex] = useState(eventInfo && eventInfo.mainImage ? { ...eventInfo.mainImage } : 0);
    const width = typeof window !== 'undefined' && window.innerWidth;
    const height = typeof window !== 'undefined' && window.innerHeight;
    const size = width > 1279 ? 3 : 2;

    const handleSetIndex = (i) => {
        setIndex(i);
        handleSelectIndex(i);
    };

    const handleDelete = (j, i) => {
        handleClearImg(j, i);
    };

    return (
        <div>
            <div className={classes.basicInfo}>
                <Icon name={SVGNames.ImageFill} color={Colors.ThemeGreen} style={{ marginRight: '19px' }} width={'25px'} height={'23px'} />
                <p>Event Graphic</p>
            </div>
            <p className={classes.basicInfoText}>
                Upload an image or flyer for the event. (This is displayed as the header on the event page).
            </p>
            <div>
                <div style={error === 'img' ? { borderColor: '#F07379' } : {}} className={classes.dragDropImage}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Carousel
                            pauseOnHover={false}
                            slidesToShow={size}
                            slidesToScroll={size}
                            style={{ outline: 'none' }}
                            renderBottomCenterControls={false}
                            renderCenterLeftControls={({ previousSlide }) =>
                                imgSrc &&
                                imgSrc.length > 3 && (
                                    <button className={classes.leftButton} onClick={previousSlide}>
                                        <ChevronLeftIcon style={{ color: 'white' }} />
                                    </button>
                                )
                            }
                            renderCenterRightControls={({ nextSlide }) =>
                                imgSrc &&
                                imgSrc.length > 3 && (
                                    <button className={classes.leftButton} onClick={nextSlide}>
                                        <ChevronRightIcon style={{ color: 'white' }} />
                                    </button>
                                )
                            }>
                            {imgSrc && imgSrc.length ? (
                                imgSrc.map((i, j) => (
                                    <div
                                        key={j}
                                        className={eventInfo ? classes.editSelectedImageBorder : classes.selectedImageBorder}
                                        onClick={() => handleSetIndex(i)}
                                        style={i.id === index.id ? {} : j === index ? {} : { borderColor: 'transparent' }}>
                                        {index.id === i.id ? (
                                            <div className={eventInfo ? classes.mainImageEdit : classes.mainImage}>Main Image</div>
                                        ) : j === index ? (
                                            <div className={eventInfo ? classes.mainImageEdit : classes.mainImage}>Main Image</div>
                                        ) : (
                                            ''
                                        )}
                                        <div
                                            key={j}
                                            className={eventInfo ? classes.editEventImage : classes.createEventImage}
                                            style={{ backgroundImage: `url(${i.url})` }}>
                                            <div className={classes.CloseButtonContent}>
                                                <button className={classes.CloseButton} onClick={() => handleDelete(j, i)}>
                                                    <CloseIcon style={{ color: Colors.ThemeGreen }} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div />
                            )}
                        </Carousel>
                    </div>

                    <div className={classes.dragDropBody}>
                        {loaderUpload ? (
                            <MiniLoader />
                        ) : (
                            <Icon
                                name={SVGNames.ImageFill}
                                color={Colors.ThemeGreen}
                                width={width > 1240 ? '60px' : '32px'}
                                height={height > 1240 ? '55px' : '29px'}
                            />
                        )}

                        <p className={classes.dragDropBodyDrag}>
                            Drag & Drop or
                            <label className={classes.custom}>
                                <input
                                    style={{ display: 'none' }}
                                    onChange={handleChange}
                                    type="file"
                                    id="file"
                                    accept=".png, .jpg, .jpeg"
                                />
                                <i className="fa fa-cloud-upload" /> Select
                            </label>
                            Images
                        </p>
                        {error === true ? (
                            <p className={classes.dragDropBodyDragSizeError}>Max size must be 2 MB</p>
                        ) : (
                            <p className={classes.dragDropBodyDragSize}>Max size for each image 2 MB</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
