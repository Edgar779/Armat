/**My Profile page */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Profile} from 'fragments';
import {DoneMessage, Loader} from 'components';
import {EditProfileActions} from "../../store";
import {FindLoad} from "../../utils";

export const MyProfile = ({}) => {
    const dispatch = useDispatch()
    const loader = FindLoad('GET_PROFILE')
    const {passwordChanged, editProfileLoader} = useSelector((state) => ({
        passwordChanged: state.profile.passwordChanged,
        editProfileLoader: state.profile.editProfileLoader,
    }));

    useEffect(() => {
        dispatch(EditProfileActions.MyProfileInfo())
    }, [])

    return (
        <React.Fragment>
            {loader.length ?
                <Loader/>
                :
                <>
                    <Profile/>
                    {passwordChanged && passwordChanged.accessToken &&
                    <DoneMessage text={'Your password changed successfully'}/>}
                    {editProfileLoader && <DoneMessage text={'Your account changed successfully'}/>}
                </>
            }
        </React.Fragment>
    );
};
