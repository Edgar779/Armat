import {CreateEventStyle} from './styles';
import {Images} from "../../../theme";
// import { SVGNames } from 'constants';
// import { Icon } from 'components';

export const TypedButton = ({type, text, disable, handleClick, name, clicked, inputs}) => {
    const width = typeof window !== 'undefined' && window.innerWidth;
    const classes = CreateEventStyle();

    return (
        <button
            name={name}
            onClick={handleClick}
            disabled={disable}
            className={
                width < 768 ? clicked === name
                    ? classes.buttonsStyleClicked
                    : inputs
                        ? classes.buttonsStyleClicked
                        : classes.buttonsStyle
                    : classes.buttonsStyle
            }>
            <img style={{marginRight:'6px'}}
                src={
                    type === 'contact'
                        ? Images.ContactUsIcon
                        : type === 'email'
                        ? Images.EmailIcon
                        : type === 'register'
                            ? Images.RegisterIcon
                            : type === 'tickets'
                                ? Images.BuyTicketsIcon
                                : type === 'donate'
                                    ? Images.DonateIcon
                                    : type === 'info'
                                        ? Images.MoreInfo
                                        : type === 'book'
                                            ? Images.BookingIcon
                                            : ''
                }
                alt={'icon'}/>
            <p>{text}</p>
        </button>
    );
};
