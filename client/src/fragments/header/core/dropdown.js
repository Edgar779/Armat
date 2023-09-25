import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linksView } from './constants';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import { useMenuStyles, StyledMenu, StyledMenuItem } from './styles';
import { Icon } from 'components';
import { ModalContext } from 'contexts';
import { authActions, appActions } from 'store';
import { Person, ExpandMore, ExpandLess } from '@material-ui/icons';
import { Colors } from 'utils';

export const DropDown = ({ handleClickClose, color, width, userInfo }) => {
    const classes = useMenuStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, SetOpen] = useState(false);
    let { openModal } = useContext(ModalContext);
    let profileName = JSON.parse(localStorage.getItem('userInfo'));
    let name = profileName ? profileName.fullName : '';

    const handleClick = (event) => {
        if (window.innerWidth > 1000) {
            setAnchorEl(event.currentTarget);
        } else {
            SetOpen(!open);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (handleClickClose) {
            handleClickClose();
        }
    };

    const handleOut = () => {
        dispatch(authActions.logOut());
        router.push('/');
        setAnchorEl(null);
        if (handleClickClose) {
            handleClickClose();
        }
    };

    const handleOpenInviteMember = () => {
        dispatch(appActions.clearError());
        openModal.inviteMember();
    };

    const userListType = linksView(userInfo);

    return (
        <div className={classes.dropDown}>
            <Button aria-controls="customized-menu" aria-haspopup="true" onClick={handleClick}>
                <Person
                    style={
                        color ? { color: color, marginRight: '5px' } : { color: Colors.ThemeBlack, marginRight: '5px', fontSize: '34px' }
                    }
                />
                <span
                    style={
                        color
                            ? { color: color, fontSize: 16, fontWeight: 'bold' }
                            : { fontSize: 16, fontWeight: 'bold', color: Colors.ThemeBlack }
                    }>
                    {width < 1050 && width > 960 ? `${name.slice(0, 3)}...` : name.length > 15 ? `${name.slice(0, 15)}...` : name}
                </span>
                {open === true ? (
                    <ExpandLess
                        style={
                            color ? { color: color, marginLeft: '5px' } : { color: Colors.ThemeBlack, fontSize: '16px', marginTop: '1px' }
                        }
                    />
                ) : (
                    <ExpandMore
                        style={
                            color ? { color: color, marginLeft: '5px' } : { color: Colors.ThemeBlack, fontSize: '16px', marginTop: '1px' }
                        }
                    />
                )}
            </Button>

            <div className={classes.desktopModalMenu}>
                <StyledMenu
                    disableScrollLock={true}
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ top: '25px', left: '-65px' }}>
                    {userListType?.map(
                        (item, index) =>
                            item && (
                                <StyledMenuItem
                                    onClick={
                                        item.icon === 'LogOut'
                                            ? () => handleOut()
                                            : item?.link === '/dashboard/'
                                            ? () => window.location.replace('/dashboard/')
                                            : null
                                    }
                                    key={index}>
                                    <Link href={item.link}>
                                        <a className={window.location.pathname === item.link ? classes.activeLink : classes.link}>
                                            <Icon
                                                name={item.icon}
                                                style={{ marginRight: '15px' }}
                                                color={'#545F7E'}
                                                width={24}
                                                height={24}
                                            />
                                            <ListItemText
                                                primary={item.name}
                                                onClick={item.name === 'Invite People' ? handleOpenInviteMember : handleClose}
                                            />
                                        </a>
                                    </Link>
                                    {/*)}*/}
                                </StyledMenuItem>
                            )
                    )}
                </StyledMenu>
            </div>

            {open === true && (
                <div className={classes.mobileModalMenu}>
                    {userListType.map(
                        (item, index) =>
                            item && (
                                <div
                                    key={index}
                                    onClick={
                                        item.icon === 'LogOut'
                                            ? () => handleOut()
                                            : item?.link === '/dashboard/'
                                            ? () => window.location.replace('/dashboard/')
                                            : null
                                    }>
                                    <Link href={item.link}>
                                        <a className={classes.link} style={{ color: 'black', marginBottom: '15px' }}>
                                            <Icon
                                                name={item.icon}
                                                style={{ marginRight: '15px' }}
                                                color={'#545F7E'}
                                                width={24}
                                                height={24}
                                            />
                                            <ListItemText
                                                style={{ color: '#545F7E' }}
                                                primary={item.name}
                                                onClick={item.name === 'Invite People' ? handleOpenInviteMember : handleClose}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            )
                    )}
                </div>
            )}
        </div>
    );
};
