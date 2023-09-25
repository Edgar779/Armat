import { SingleEventStyle } from './styles';
import { Stars } from 'components';

export const Reviews = ({ type, count, stars, handleClick }) => {
    const classes = SingleEventStyle();
    return (
        <div onClick={handleClick} className={classes.reviewsWrapper}>
            <div className={classes.type}>
                <p>{type}</p>
                <Stars stars={stars} />
            </div>

            <p className={classes.count}>{count ? `${count} Reviews` : 'No Reviews'}</p>
        </div>
    );
};
