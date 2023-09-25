/**Profile export index */

import { EditPassword, editProfile, MyProfileInfo, RemoveError, RemoveSuccess, updateAvatar } from './profile.action';

export { profileReducer } from './profile.reducer';
export { watchProfile } from './profile.saga';

export const EditProfileActions = {
    MyProfileInfo,
    editProfile,
    EditPassword,
    RemoveError,
    RemoveSuccess,
    updateAvatar,
};
