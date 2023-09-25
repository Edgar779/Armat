export const StatusText = ({ row }) => {
    return row === 'ACTIVE'
        ? 'Active'
        : row === 'ARCHIVED'
        ? 'Archived'
        : row === 'PENDING'
        ? 'Pending'
        : row === 'REJECTED'
        ? 'Rejected' : 'Not Set';
};
