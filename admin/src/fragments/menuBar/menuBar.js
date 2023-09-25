import React, {useEffect} from 'react';
import {useTheme} from '@material-ui/core/styles';
import {navBarStyles} from './core/style';
import {Router} from 'root/router';
import {TopBar, LeftBar} from './core';
import {useSelector} from 'react-redux';

export const MenuBar = ({}) => {
    const classes = navBarStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const [linkInfo, setLinkInfo] = React.useState('')

    const {saveLink} = useSelector((state) => ({
        saveLink: state.auth.saveLink,
    }));

    const handleDrawerClose = (type) => {
        setOpen(!open);
        // setOpen(type ? type : !open);
    };
    useEffect(() => setLinkInfo(saveLink ? saveLink : window.location.pathname.slice(6)), [saveLink]);

    const setLinksStyle = () => {
        if (!linkInfo) {
            setLinkInfo(window.location.pathname.slice(6));
        }
    };

    return (
        <div className={classes.root}>
            <TopBar
                open={open}
                handleClick={handleDrawerClose}
            />
            <LeftBar handleDrawerClose={handleDrawerClose}
                     open={open}
                     theme={theme}
                     setLinksStyle={setLinksStyle}
                     linkInfo={linkInfo}
            />
            <main className={classes.content}>
                <Router/>
            </main>
        </div>
    );
};
