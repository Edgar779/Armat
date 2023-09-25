import axios from 'axios';

export const authService = {
    //Request For get Tags
    GetTags: () => axios.get(`/tags`),

    //Request For get Categories
    GetCategories: () => axios.get(`/categories`),
};
