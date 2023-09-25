import { GetCategories, GetTags } from './manage.action';
export { manageReducer } from './manage.reducer';
export { watchManage } from './manage.saga';

export const manageActions = {
    GetTags,
    GetCategories,
};
