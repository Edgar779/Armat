/**Tags and Categories export index */

import { CreateCategories, CreateTag, DeleteCategories, DeleteTags, GetCategories, GetTags } from './manage.action';

export { manageReducer } from './manage.reducer';
export { watchManage } from './manage.saga';

export const manageActions = {
    CreateTag,
    GetTags,
    DeleteTags,
    CreateCategories,
    GetCategories,
    DeleteCategories,
};
