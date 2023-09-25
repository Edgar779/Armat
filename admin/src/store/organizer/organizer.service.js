/**Tags and Categories service */
import axios from 'axios';

export const authService = {
    // Tags

    crateOrgCatService: ( data ) => axios.post('/orgCategories', data, { auth: true }),

    editOrgCatService: ( data ) => axios.patch(`/orgCategories/${data.id}`, data.data, { auth: true }),

    getOrgCatService: ( ) => axios.get('/orgCategories', { auth: true }),

    deleteOrgCatService: ( id ) => axios.delete(`/orgCategories/${id}`, { auth: true }),



    // CreateTags: (data) => axios.post(`/tags`, {'tags' : [data]}, { auth: true }),
    //
    // GetTags: () => axios.get(`/tags`, { auth: true }),
    //
    // DeleteTags: (name) =>{
    //     let config = {
    //         headers: { 'access-token': token } ,
    //         data: {
    //             'tags' : [name]
    //         }
    //     }
    //     axios.delete(`/tags`, config ) },
    //
    // // Categories
    //
    // CreateCategory: (data) => axios.post(`/categories`, {'categories' : [data]}, { auth: true }),
    //
    // GetCategories: () => axios.get(`/categories`, { auth: true }),
    //
    //
    //
    // DelCategories: (name) =>{
    //
    //     let config = {
    //         headers: { 'access-token': token } ,
    //         data: {
    //             'categories' : [name]
    //         }
    //     }
    //     axios.delete(`/categories`, config   )
    // },
};
