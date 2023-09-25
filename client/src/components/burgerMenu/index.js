import { menuStyle } from './style';
import { shallowEqual, useSelector } from 'react-redux';

export const BurgerMenu = ({ handleClick, open }) => {
    const classes = menuStyle();
    const auth = useSelector((state) => {
        return state.auth;
    }, shallowEqual);

    return (
        <>
            {auth.isAuthenticated && (
                <div className={classes.burger} onClick={handleClick}>
                    <span
                        style={
                            open
                                ? { transform: 'translate3d(0px, 8px, 0px) rotate(45deg)' }
                                : { transform: 'translate3d(0px, 0px, 0px) rotate(0deg)' }
                        }
                    />
                    <span
                        style={
                            open
                                ? { transform: 'translate3d(0px, 8px, 0px) rotate(-45deg)' }
                                : { transform: 'translate3d(0px, 15px, 0px) rotate(0deg)' }
                        }
                    />
                </div>
            )}
        </>
    );
};

export default BurgerMenu;
