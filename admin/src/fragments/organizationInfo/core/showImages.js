import { CloseButton } from 'components';
import { useState } from 'react';
import {organizationInfoStyles} from "./styles";
import Carousel from "nuka-carousel";
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

export const ShowImages = ({ images, handleClick }) => {
    const classes = organizationInfoStyles();
    const [index, setIndex] = useState(1);

    return (
        <div className={classes.showImageWrapper}>
            <>
                <div className={classes.imageCount}>{`${index} / ${images && images.length}`}</div>
                <div className={classes.closeButtonWrapper}>
                    <CloseButton handleClick={handleClick} type={'info'} background={'#00000066 0% 0% no-repeat padding-box'} />
                </div>
            </>
            {
                <div className={classes.carouselImage}>
                    <div style={{ height: '100%' }} className={classes.sliderWrapper}>
                        <Carousel
                            renderCenterLeftControls={({ previousSlide }) => (
                                <button className={classes.imageGallery} onClick={previousSlide}>
                                    <ChevronLeft className={classes.navIcon} />
                                </button>
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <button className={classes.imageGallery} onClick={nextSlide}>
                                    <ChevronRight className={classes.navIcon} />
                                </button>
                            )}
                            afterSlide={(e) => setIndex(e + 1 )}
                            renderBottomCenterControls={false}>
                            {images &&
                            images.length &&
                            images.map((i, j) => <img className={classes.carouselImage} key={j} src={i.url} alt="icon" />)}
                        </Carousel>
                    </div>
                </div>
            }
        </div>
    );
}
