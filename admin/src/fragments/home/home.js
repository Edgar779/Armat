import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { Link } from 'react-router-dom';
import routes from 'constants/routes.json';
import { homePageStyle } from './style';
import { Images } from 'theme';

export const Home = () => {
    const classes = homePageStyle();
    const dispatch = useDispatch();

    return (
        <div className={classes.homeBackground}>
            <h2 className={classes.homeInfo}>WELCOME TO ARMAT ADMIN PANEL!</h2>
            <p className={classes.homeTittle}>You can monitor the following data:</p>

            <ul className={classes.homeTittleUl}>
                {routes.map((item, index) =>
                    index !== 0 ? (
                        <li className={classes.homeLinks} key={index}>
                            <img className={classes.homeTittleIcon} src={Images.checked} alt="checked" />
                            <p className={classes.homeLinksText}>{item.text}</p>
                            <Link
                                onClick={() => dispatch(authActions.saveWindowLink(item.path))}
                                className={classes.homeLinksRoute}
                                to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
};
