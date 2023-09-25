import { SVGNames } from 'constants/index';
import { Icon } from 'components';
import { CommonStyle } from './styles';

export const TypedButton = ({ type, text, disable, handleClick, name, clicked, inputs }) => {
    const width = typeof window !== 'undefined' && window.innerWidth;
    const classes = CommonStyle();
    return (
        <button
            style={{ height: '48px' }}
            name={name}
            onClick={handleClick}
            disabled={disable}
            className={
                width < 768
                    ? clicked === name
                        ? classes.buttonsStyleClicked
                        : inputs
                        ? classes.buttonsStyleClicked
                        : classes.buttonsStyle
                    : classes.buttonsStyle
            }>
            <Icon
                name={
                    type === 'yelpBusinessId'
                        ? SVGNames.YelpIcon
                        : type === 'googlePlaceId'
                        ? SVGNames.GoogleIcon
                        : type === 'facebook'
                        ? SVGNames.FacebookIcon
                        : type === 'instagram'
                        ? SVGNames.InstagramIcon
                        : type === 'twitter'
                        ? SVGNames.TwitterIcon
                        : type === 'youTube'
                        ? SVGNames.YoutubeIcon
                        : ''
                }
            />
            <p>{text}</p>
        </button>
    );
};
