import { CreateEventStyle } from './styles';
import { SVGNames } from 'constants/index';
import { Icon } from 'components';

export const TypedButton = ({ type, text, disable, handleClick, name, clicked, inputs }) => {
    const width = typeof window !== 'undefined' && window.innerWidth;
    const classes = CreateEventStyle();

    return (
        <button
            name={name}
            onClick={handleClick}
            disabled={disable}
            className={
                width < 768 ? clicked === name ? classes.buttonsStyleClicked :
                    inputs ? classes.buttonsStyleClicked : classes.buttonsStyle
                    : classes.buttonsStyle
            }>
            <Icon
                name={
                    type === 'contact'
                        ? SVGNames.ContactUs
                        : type === 'email'
                        ? SVGNames.SendEmail
                        : type === 'register'
                        ? SVGNames.Register
                        : type === 'tickets'
                        ? SVGNames.Tickets
                        : type === 'donate'
                        ? SVGNames.Donate
                        : type === 'info'
                        ? SVGNames.Info
                        : type === 'book'
                        ? SVGNames.Book
                        : ''
                }
            />
            <p>{text}</p>
        </button>
    );
};
