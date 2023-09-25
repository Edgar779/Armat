import { imageStyles } from './style';
import { Logo, Picture } from 'components';

export const ModalImage = ({ image }) => {
    const classes = imageStyles();

    return (
        <div className={classes.pictureBox}>
            <div className={classes.logo}>
                <Logo classes={classes} />
            </div>
            <Picture image={image} classNameWrapper={classes.picture} />
        </div>
    );
};

export default ModalImage;
