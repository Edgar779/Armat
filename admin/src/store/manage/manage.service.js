/**Tags and Categories service */
import axios from 'axios';

const header ={ auth: true }

export const authService = {
    // Tags

    CreateTags: (data) => axios.post(`/eventTags`, {'tags' : [data]}, { auth: true }),

    GetTags: () => axios.get(`/eventTags`, { auth: true }),

    DeleteTags: (name) =>{
        let config = {
            auth: true ,
            data: {
                'tags' : [name]
            }
        }
        axios.delete(`/eventTags`, config ) },

    // Categories

    CreateCategory: (data) => axios.post(`/categories`, {'categories' : [data]}, { auth: true }),

    GetCategories: () => axios.get(`/categories`, { auth: true }),



    DelCategories: (name) =>{

        let config = {
            auth: true ,
            data: {
                'categories' : [name]
            }
        }
        axios.delete(`/categories`, config   )
    },
};
