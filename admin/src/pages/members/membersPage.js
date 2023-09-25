/**Users page */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'store';
import { Members } from 'fragments';

export const MembersPage = () => {
    const dispatch = useDispatch();

    useEffect(() =>
      dispatch(userActions.getUsersList()),
      []);

    return (
        <div>
            <Members/>
        </div>
    );
};
