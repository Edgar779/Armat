export const ToastFail = (fail) => {
    if (fail) {
        return fail === 'EDIT_OFFICE'
            ? 'Something went wrong'
            : fail === 'EDIT_MY_PROFILE'
            ? 'Something went wrong'
            : fail === 'EDIT_MY_PASSWORD'
            ? 'Something went wrong'
            : false;
    }
};
