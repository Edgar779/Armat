import { TitleTypography } from './styles';
import { ContactForm } from 'components';
import { contactFormStyles } from './styles';
import { contactUs } from './constants';

export const Contact = () => {
    const classes = contactFormStyles();

    return (
        <div className={classes.root}>
            <p className={classes.contactUs}>{contactUs.title}</p>
            <ContactForm classes={classes} contactUs={contactUs} />
        </div>
    );
};

export default Contact;
