// Finde Success.

import { useSelector } from 'react-redux';

export const FindSuccess = (status) => {
    const { httpOnSuccess } = useSelector((state) => ({
        httpOnSuccess: state.httpOnSuccess,
    }));
    return httpOnSuccess && httpOnSuccess?.length && httpOnSuccess.find((i) => i.type === status);
};
