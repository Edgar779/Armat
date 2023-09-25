import React, {useState} from 'react';
import routes from 'constants/routes.json';
import {authActions} from 'store';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {navBarStyles} from './style';
import {
    Accordion,
    AccordionSummary,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';
import {ChevronLeft, ChevronRight} from '@material-ui/icons';
import {faHome, faUser, faCalendarCheck, faUsers, faListAlt, faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ExpandMore} from '@material-ui/icons';
import {Images} from "theme";

export const LeftBar = ({handleDrawerClose, open, theme, setLinksStyle, linkInfo}) => {

    const classes = navBarStyles();
    const dispatch = useDispatch();
    const win = window.location.pathname
    const [draw, setDraw] = useState(false)

    const handleDrow = () =>{
        if(open === false){
            handleDrawerClose(true)
        } 
    }
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>{theme.direction === 'rtl' ? <ChevronRight/> :
                    <ChevronLeft/>}</IconButton>
            </div>
            <Divider/>

            <List onClick={setLinksStyle} className={classes.menuItems}>
                {routes.map((item, i) => (
                    <Link onClick={() => dispatch(authActions.saveWindowLink(item.path))} key={i}
                          to={item.path !== '/myOrganizations' && item.path !== '/organizations' ? item.path : '#'}
                    >
                        <ListItem className={linkInfo === item.path ?
                            item.path === '/myOrganizations' || item.path === '/organizations' ?
                                draw === true ? classes.ActiveListItemOrg : classes.ActiveListItem :
                            classes.ActiveListItem

                            : classes.ListItem} button>
                            {item.icon === 'Organizations' ?
                                <div className={classes.organizationWrapper}>
                                    <Accordion
                                        onClick={ handleDrow }
                                    >
                                        <AccordionSummary
                                            onClick={() => setDraw(!draw)}
                                            expandIcon={<ExpandMore style={{color: 'white',}}/>}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <div className={classes.organization}>
                                                <img src={
                                                    win === "/admin/myOrganizations" || win === "/admin/organizations" ?
                                                        Images.organizationIcon : Images.organization } alt={'organizationIcon'}/>
                                                {open &&
                                                <p className={win === "/admin/myOrganizations" ||
                                                    win === "/admin/organizations"
                                                        ? 'menuActiveItemsStyle' : 'menuItemsStyle'}>Organi...</p>
                                                }
                                            </div>
                                        </AccordionSummary>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Link
                                                className={win === "/admin/myOrganizations" ? 'menuActiveItemsStyle' : 'menuItemsStyle'}
                                                onClick={() => dispatch(authActions.saveWindowLink('/myOrganizations'))}
                                                key={i} to={'/myOrganizations'}>Created by me </Link>
                                        </AccordionSummary>
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Link
                                                className={win === "/admin/organizations" ? 'menuActiveItemsStyle' : 'menuItemsStyle'}
                                                onClick={() => dispatch(authActions.saveWindowLink('/organizations'))}
                                                key={i} to={'/organizations'}>Created by Us...</Link>
                                        </AccordionSummary>
                                    </Accordion>
                                </div>
                                :
                                <FontAwesomeIcon
                                    icon={
                                        item.icon === 'Home'
                                            ? faHome
                                            : item.icon === 'MyProfile'
                                            ? faUser
                                            : item.icon === 'MyEvents'
                                                ? faCalendarCheck
                                                : item.icon === 'Users'
                                                    ? faUsers
                                                    : item.icon === 'Events'
                                                        ? faListAlt
                                                        : item.icon === 'Settings'
                                                            ? faCog
                                                            : faCog
                                    }
                                    style={{
                                        color: linkInfo === item.path ? 'white' : '#FFFFFF80',
                                        width: '24px',
                                        height: '24px',
                                        marginRight: '10px',
                                    }}
                                />
                            }
                            {open && item.path !== '/myOrganizations' && item.path !== '/organizations' && (
                                <ListItemText
                                    className={linkInfo === item.path ? 'menuActiveItemsStyle' : 'menuItemsStyle'}
                                    primary={item.name}
                                />
                            )}
                        </ListItem>
                        }
                    </Link>
                ))}
            </List>
            <Divider/>
        </Drawer>
    );
};
