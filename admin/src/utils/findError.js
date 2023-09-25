import { useSelector } from 'react-redux';

export const FindError = (status) => {
    const { httpOnError } = useSelector((state) => ({
        httpOnError: state.httpOnError,
    }));
    return httpOnError && httpOnError.length && httpOnError.filter((i) => (i.type === status ? i : 'ww'));
};

export const FindErrorItem = (status) => {
    const { httpOnError } = useSelector((state) => ({
        httpOnError: state.httpOnError,
    }));

    return (
        httpOnError &&
        httpOnError.length &&
        httpOnError.find((i) => (i.type === status))

    );
};