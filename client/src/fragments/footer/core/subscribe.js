import { SubscribeForm } from 'components';
import { subscribeData } from './constants';
import { contactFormStyles, subscribeStyles } from './styles';
import { Colors } from 'utils';

export const Subscribe = () => {
    const classes = subscribeStyles();
    const anotherClasses = contactFormStyles();
    return (
        <div className={classes.root}>
            <p className={anotherClasses.contactUs}>Subscribe to Our Newsletter</p>
            <p className={classes.body} style={{ color: Colors.ThemeBlack }}>
                Receive the latest news and updates about armat.org by signing up for our mailing list.
            </p>
            <SubscribeForm classes={classes} subscribeData={subscribeData} />
        </div>
    );
};

export default Subscribe;
