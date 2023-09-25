export const ToastSuccess = (success) => {
    if (success) {
        return success === 'SUBSCRIBE_EVENT'
            ? 'You subscribed to the event '
            : success === 'UNSUBSCRIBE_EVENT'
            ? 'Event was unsubscribed'
            : success === 'EDIT_PROFILE'
            ? 'Your account changed successfully'
            : success === 'EDIT_MY_PASSWORD'
            ? 'Your password was changed'
            : success === 'EDIT_MY_PROFILE'
            ? 'Your profile was edited'
            : success === 'EDIT_MY_ORGANIZATION'
            ? 'Your organization was edited'
            : success === 'CLAIMS'
            ? 'Your claim request has been submitted'
            : success === 'FOLLOW'
            ? 'You are now following this organization'
            : success === 'UNFOLLOW'
            ? 'You no longer follow this organization'
            : success === 'SET_EVENT_STATUS'
            ? 'Event Status was edited'
            : false;
    }
};
