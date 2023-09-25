import { GET_CATEGORIES, GET_TAG } from './manage.types';

//For get Tags
export const GetTags = () => {
    return {
        type: GET_TAG,
    };
};

//For get Categories
export const GetCategories = () => {
    return {
        type: GET_CATEGORIES,
    };
};
