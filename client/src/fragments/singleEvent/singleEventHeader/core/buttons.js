import { useStyles } from './style';
import { Icon } from 'components';
import { SVGNames } from 'constants/index';

export const Buttons = ({ type, text, key, handleClickBuy }) => {
    const classes = useStyles();
    const handleClick = () => {
        if (handleClickBuy) {
            handleClickBuy();
        } else {
            const url = text;
            // const url = text.slice(3);
            if (type === 'emailUs') {
                window.open(`mailto:${url}`, '_blank');
            }
            if (type === 'contactUs') {
                window.open(`tel:${url}`, '_blank');
            } else {
                window.open(`${url}/?utm_source=https://armat.org/&utm_medium=referral&utm_campaign=summer-sale`, '_blank');
            }
        }
    };

    const buttonText =
        type === 'contactUs'
            ? 'Contact Us'
            : type === 'emailUs'
            ? 'Send Email'
            : type === 'register'
            ? 'Register'
            : type === 'buyTickets'
            ? 'Buy Tickets'
            : type === 'donate'
            ? 'Donate'
            : type === 'moreInfo'
            ? 'More Info'
            : type === 'bookNow'
            ? 'Book Now'
            : '';

    return (
        <div>
            <button onClick={handleClick} key={key} className={classes.buttonsStyle}>
                <Icon
                    name={
                        type === 'contactUs'
                            ? SVGNames.ContactUsBlack
                            : type === 'emailUs'
                            ? SVGNames.SendEmailBlack
                            : type === 'register'
                            ? SVGNames.RegisterBlack
                            : type === 'buyTickets'
                            ? SVGNames.BuyTicketsBlack
                            : type === 'donate'
                            ? SVGNames.DonateBlack
                            : type === 'moreInfo'
                            ? SVGNames.Info
                            : type === 'bookNow'
                            ? SVGNames.BookBlack
                            : ''
                    }
                />
                <p>{buttonText}</p>
            </button>
        </div>
    );
};
