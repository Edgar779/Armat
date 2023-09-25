import { useStyles } from './styles';
import { DropDown, Notification, Signin } from './index';
import { shallowEqual, useSelector } from 'react-redux';

export const Menu = ({ notifications, width, userInfo, token }) => {
    const classes = useStyles();
    const auth = useSelector((state) => {
        return state.auth;
    }, shallowEqual);

    if (!auth.userInfo || !token) {
        return <Signin />;
    } else {
        return width > 1280 ? (
            <ul className={classes.list}>
                <li className={`${classes.listItem}`}>
                    <DropDown userInfo={userInfo} notifications={notifications} width={width} />
                </li>
                <li className={`${classes.listItem} ${classes.notification}`}>
                    <Notification userInfo={userInfo} notifications={notifications} width={width} />
                </li>
            </ul>
        ) : (
            <ul className={classes.listMobile}>
                <li className={`${classes.listItem} ${classes.notification}`}>
                    <Notification userInfo={userInfo} notifications={notifications} width={width} />
                </li>
            </ul>
        );
    }
};
