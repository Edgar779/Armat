import React from 'react';
import { useStyles } from './styles';
export const Picture = ({ image, wrapperImageRef, imageRef, className = '', classNameWrapper = '', width, height, smOnlySm, style, type }) => {
    const classes = useStyles();

    return (
        <picture className={`${type === 'footer' ? classes.pictureFooter : classes.picture} ${classNameWrapper}`} ref={wrapperImageRef} style={style}>
            {image.xlJPG && image.lgJPG ? <source media="(min-width: 1281px)" srcSet={image.xlJPG} /> : null}
            {image.xlWEBP && image.lgWEBP ? <source media="(min-width: 1281px)" srcSet={image.xlWEBP} type="image/webp" /> : null}
            {image.lgJPG && image.mdJPG ? (
                <source media={`${image.mdJPG ? '(min-width: 960px)' : '(max-width: 1281px)'}`} srcSet={image.lgJPG} />
            ) : null}
            {image.lgWEBP && image.mdWEBP ? (
                <source media={`${image.mdWEBP ? '(min-width: 960px)' : '(max-width: 1281px)'}`} srcSet={image.lgWEBP} type="image/webp" />
            ) : null}
            {image.mdJPG && image.smJPG ? (
                <source
                    media={`${image.smJPG ? `(min-width: ${smOnlySm ? '600px' : '768px'})` : '(max-width: 992px)'}`}
                    srcSet={image.mdJPG}
                />
            ) : null}
            {image.mdWEBP && image.smWEBP ? (
                <source
                    media={`${image.smWEBP ? `(min-width: ${smOnlySm ? '600px' : '768px'})` : '(max-width: 992px)'}`}
                    srcSet={image.mdWEBP}
                    type="image/webp"
                />
            ) : null}
            <source
                srcSet={
                    image.smWEBP
                        ? image.smWEBP
                        : image.mdWEBP
                        ? image.mdWEBP
                        : image.lgWEBP
                        ? image.lgWEBP
                        : image.xlWEBP
                        ? image.xlWEBP
                        : null
                }
                type="image/webp"
            />
            <img
                src={
                    image.JPG
                        ? image.JPG
                        : image.smJPG
                        ? image.smJPG
                        : image.mdJPG
                        ? image.mdJPG
                        : image.lgJPG
                        ? image.lgJPG
                        : image.xlJPG
                        ? image.xlJPG
                        : null
                }
                alt={image.alt}
                title={image.title}
                className={`lazyload ${className}`}
                width={width}
                height={height}
                ref={imageRef}
            />
        </picture>
    );
};

export default Picture;
