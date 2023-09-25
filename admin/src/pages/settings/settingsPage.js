//Tags and Categories page

import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {manageActions, organizerActions} from 'store';
import { settingsPage } from './style';
import {OrganizerCateg, Settings} from 'fragments';

export const SettingsPage = ({}) => {
    const classes = settingsPage();
    const dispatch = useDispatch();
    const [type, setType] = useState('event')

    useEffect(() => (dispatch(manageActions.GetTags()), dispatch(manageActions.GetCategories()), dispatch(organizerActions.getOrgCat())), []);

    return (
        <div>
            <div className={classes.settingsButtons}>
                <button
                    onClick={() => setType('event')}
                    className={type === 'event' ? classes.activeButton : classes.passiveButton}>Event Categories & Tags</button>
                <button
                    onClick={() => setType('organizer')}
                    className={type === 'organizer' ? classes.activeButton : classes.passiveButton}>Organization Categories</button>
            </div>
            {/*<p className={classes.settingsTittle}>Manage Categories and Tags</p>*/}
            {type === 'event' ?
                <Settings/>
                :
                <OrganizerCateg/>
            }


        </div>
    );
}
