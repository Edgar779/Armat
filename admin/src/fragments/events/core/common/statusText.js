export const StatusText = ({ row }) => {
    return row === 'UNPUBLISHED'
        ? 'Unpublished'
        : row === ' DISAPPROVE'
        ? 'Disapprove'
        : row === 'PUBLISHED'
        ? 'Publish'
        : row === 'REJECTED'
        ? 'Disapproved'
        : row === 'PENDING'
        ? 'Pending'
        : 'Not Set';
};
