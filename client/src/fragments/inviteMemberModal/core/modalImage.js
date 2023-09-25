import { imageStyles } from './style';
import { Picture, Logo } from 'components';

export const ModalImage = ({ image }) => {
    const classes = imageStyles();

    return (
        <div className={classes.pictureBox}>
            <Logo classes={classes} />
            <Picture image={image} classNameWrapper={classes.picture} />
        </div>
    );
};

export default ModalImage;
