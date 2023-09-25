
export const RoleText = ({ row, r }) => {
    return row === 'ORGANIZER' ? 'Organizer' :
        row === ' VERIFIED_MEMBER' ? 'Verified User' :
        row === 'VERIFIED_MEMBER' ? 'Verified User' :
            row === 'ADMIN' ? 'Admin' :
                row === 'MEMBER' ? 'Unverified User' :
                    'Not Set';
};


