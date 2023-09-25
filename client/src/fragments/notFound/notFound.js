import { Picture } from 'components';
import { image, notFoundStyle } from './core';

export const NotFound = () => {
    const classes = notFoundStyle();
    return (
        <div className={classes.notFoundWrapper}>
            <div className={classes.notFoundImg}>
                <Picture image={image} />
            </div>
        </div>
    );
};
