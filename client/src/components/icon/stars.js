import { Rating } from '@material-ui/lab';
import { Star } from '@material-ui/icons';

export const Stars = ({ stars }) => {
    return (
        <>
            <Rating
                name="text-feedback"
                value={stars}
                readOnly
                // style={{ color: 'linear-gradient(147deg, #c20114 0%, #e8c547 74%);' }}
                precision={0.5}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </>
    );
};
