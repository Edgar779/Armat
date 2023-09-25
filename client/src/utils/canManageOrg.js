export const canManageOrg = (user, info) => {
    if (!info || !user) return false;
    if (user.auth?.role === 'ADMIN') return true;
    if (user.id === info.manager?.id) return true;
    return false;
};
export const canManageOrgNoAdmin = (user, info) => {
    if (!info || !user) return false;
    if (user.id === info.manager?.id) return true;
    return false;
};
