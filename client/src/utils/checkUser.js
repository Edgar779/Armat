const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('userInfo'));

export const checkUser = () => {
    return user?.auth?.role === 'MEMBER';
};

export const checkAdmin = () => {
    return user?.auth?.role === 'ADMIN';
};
