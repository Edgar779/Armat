/**Router for switch screens */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MenuBar } from 'fragments';
import { LoginPage } from 'pages';

export const RouterSwitcher = ({}) => {
    const Token = localStorage.getItem('access-token');

    return (
        <React.Fragment>
            {!Token ? (
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Redirect to={'/login'} />
                </Switch>
            ) : (
                <MenuBar />
            )}
        </React.Fragment>
    );
};
