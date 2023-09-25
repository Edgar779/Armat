import React, { useState } from 'react';
import { CreateEventStyle } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import { Icon, MiniLoader } from 'components';
import { SVGNames } from 'constants/index';
import Carousel from 'nuka-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Colors } from 'utils';
import { FileUploader } from 'react-drag-drop-files';

export const UploadImage = ({
    handleChange,
    handleClearImg,
    imgSrc,
    error,
    handleSelectIndex,
    eventInfo,
    loaderUpload,
    imgIndex,
    text,
}) => {
    const classes = CreateEventStyle();
    const width = typeof window !== 'undefined' && window.innerWidth;
    const height = typeof window !== 'undefined' && window.innerHeight;
    const size = width > 1279 ? 3 : 2;
    const [fileAdded, setFileAdded] = useState(null);

    const handleSetIndex = (i) => {
        handleSelectIndex(i);
    };

    const handleDelete = (j, i) => {
        handleClearImg(j, i);
        setFileAdded(null);
    };

    return (
        <div>
            <div className={classes.basicInfo}>
                <Icon name={SVGNames.ImageFill} color={Colors.ThemeGreen} style={{ marginRight: '19px' }} width={'25px'} height={'23px'} />
                <p>{text ? text : 'Event Graphic'}</p>
            </div>
            <p className={classes.basicInfoText}>
                Images will be visible in a gallery and in other parts of Armat. The main image is used when displaying the organization in
                lists and as the face image of the organization.
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
                                    <div key={j}>
                                        <div
                                            key={j}
                                            className={eventInfo ? classes.editSelectedImageBorder : classes.selectedImageBorder}
                                            style={
                                                j === imgIndex
                                                    ? {
                                                          position: 'relative',
                                                          zIndex: '9',
                                                      }
                                                    : { position: 'relative', zIndex: '9', borderColor: 'transparent' }
                                            }>
                                            <div
                                                style={{ position: 'absolute', right: 5, top: 5, zIndex: 99 }}
                                                className={classes.CloseButtonContent}>
                                                <button className={classes.CloseButton} onClick={() => handleDelete(j, i)}>
                                                    <CloseIcon style={{ color: Colors.ThemeGreen }} />
                                                </button>
                                            </div>

                                            {j === imgIndex ? (
                                                <div className={eventInfo ? classes.mainImageEdit : classes.mainImage}>Main Image</div>
                                            ) : (
                                                ''
                                            )}
                                            <div
                                                onClick={() => handleSetIndex(j)}
                                                key={j}
                                                className={eventInfo ? classes.editEventImage : classes.createEventImage}
                                                style={{ backgroundImage: `url(${i.url})` }}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div />
                            )}
                        </Carousel>
                    </div>

                    <FileUploader
                        fileOrFiles={fileAdded}
                        multiple={true}
                        handleChange={async (file) => {
                            handleChange(file);
                            setFileAdded(file);
                        }}
                        name="file">
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
                                <div className={classes.custom}>
                                    <i /> Select
                                </div>
                                Images
                            </p>
                            {error === true ? (
                                <p className={classes.dragDropBodyDragSizeError}>Max size must be 2 MB</p>
                            ) : (
                                <p className={classes.dragDropBodyDragSize}>Max size for each image 2 MB</p>
                            )}
                        </div>
                    </FileUploader>
                </div>
            </div>
        </div>
    );
};
