import React from 'react';
import {CreateEventStyle} from './styles';
import CloseIcon from '@material-ui/icons/Close';
import Carousel from 'nuka-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import image from "../../../assets/images/image.png";
import {ButtonMiniLoader} from "../../../components";


export const UploadImage = ({
                                handleChange,
                                handleClearImg,
                                imgSrc,
                                error,
                                handleSelectIndex,
                                eventInfo,
                                loaderUpload,
                                imgIndex,
                            }) => {
    const classes = CreateEventStyle();
    const width = typeof window !== 'undefined' && window.innerWidth;
    const height = typeof window !== 'undefined' && window.innerHeight;
    const size = width > 1279 ? 3 : 2;

    const handleSetIndex = (i) => {
        handleSelectIndex(i);
    };

    const handleDelete = (j, i) => {
        handleClearImg(j, i);
    };

    return (
        <div>
            <div className={classes.basicInfo}>
                    <img src={image} alt="image"/>
                <p>Event Graphic</p>
            </div>
            <p className={classes.basicInfoText}>
                Upload an image or flyer for the event. (This is displayed as the header on the event page).
            </p>
            <div>
                <div style={error === 'img' ? {borderColor: '#F07379'} : {}} className={classes.dragDropImage}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Carousel
                            pauseOnHover={false}
                            slidesToShow={size}
                            slidesToScroll={size}
                            style={{outline: 'none'}}
                            renderBottomCenterControls={false}
                            renderCenterLeftControls={({previousSlide}) =>
                                imgSrc &&
                                imgSrc.length > 3 && (
                                    <button className={classes.leftButton} onClick={previousSlide}>
                                        <ChevronLeftIcon style={{color: 'white'}}/>
                                    </button>
                                )
                            }
                            renderCenterRightControls={({nextSlide}) =>
                                imgSrc &&
                                imgSrc.length > 3 && (
                                    <button className={classes.leftButton} onClick={nextSlide}>
                                        <ChevronRightIcon style={{color: 'white'}}/>
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
                                                    <CloseIcon style={{color: '#387DFF'}}/>
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

                    <div className={classes.dragDropBody}>
                        {loaderUpload ?
                            <ButtonMiniLoader/>
                            :
                            <img src={image} alt="image"/>
                        }
                        <p className={classes.dragDropBodyDrag}>
                            Drag & Drop or
                            <label className={classes.custom}>
                                <input
                                    onDrag={handleChange}
                                    style={{display: 'none'}}
                                    onChange={handleChange}
                                    type="file"
                                    id="file"
                                    accept=".png, .jpg, .jpeg"
                                />
                                <i className="fa fa-cloud-upload"/> Select
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
