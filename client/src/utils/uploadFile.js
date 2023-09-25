import axios from 'axios';

export const uploadFile = async (e) => {
    const formData = new FormData();
    for (let a of e) {
        let type = a.name.split('.');
        type = type[type.length - 1];
        let blob = a.slice(0, a.size, `image/${type}`);
        let newFile = new File([blob], `avatar.${type}`, { type: `image/${type}` });
        const endpoint = `/files/upload?includeThumbnail=true`;

        formData.append('files', newFile);
        const response = await axios.post(endpoint, formData, { auth: true });
        return response.data;
    }
};
