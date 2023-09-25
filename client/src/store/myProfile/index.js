import { getProfile, openFilterModal } from './myProfile.action';

export { myProfileReducer } from './myProfile.reducer';
export { watchMyProfile } from './myProfile.saga';

export const myProfileActions = {
    getProfile,
    openFilterModal,
};
