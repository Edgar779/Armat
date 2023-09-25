import {
    setUser,
    editProfile,
    MyProfileInfo,
    EditProfile,
    EditPassword,
    myProfileInfo,
} from './profile.actions';
export { profileReducer } from './profile.reducer';
export { watchProfile } from './profile.saga';
export { SET_USER, UPDATE_AVATAR, EDIT_PROFILE } from './profile.types';

export const EditProfileActions = {
    myProfileInfo,
    editProfile,
    EditPassword,
};
