/**Routers after log in */

import { Route, Switch, Redirect } from 'react-router-dom';
import {
    EventsPage,
    HomePage,
    MembersPage,
    SettingsPage,
    MyProfile,
    MyEvents,
    OrganizationsPage,
    SingleOrganization
} from '../pages';
import React, {useEffect} from 'react';
import {MyOrganizations} from "../pages/organizations/myOrganizations";

export const Router = ({}) => {
  const userInfo =  JSON.parse(localStorage.getItem('userInfo'))


  useEffect(() => {
      if(userInfo && userInfo.type !== 'ADMIN'){
        // localStorage.removeItem('access-token');
        // localStorage.removeItem('userInfo');
        //   window.location.replace('admin/login')

      }
  }, [userInfo]);

    return (
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/members" component={MembersPage}/>
        <Route path="/events" component={EventsPage}/>
        <Route path="/settings" component={SettingsPage}/>
        <Route path="/myProfile" component={MyProfile}/>
        <Route path="/myEvents" component={MyEvents}/>
        <Route path="/organizations" component={OrganizationsPage}/>
        <Route path="/myOrganizations" component={MyOrganizations}/>
        <Route path="/organization/:id" component={SingleOrganization}/>
        <Redirect to={'/'}/>
      </Switch>
    );
};
