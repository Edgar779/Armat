export const ToastSuccess = (success) => {
    if (success) {
        return success === 'SUBSCRIBE_EVENT' ? 'You subscribed to the event ' :
            success === 'UNSUBSCRIBE_EVENT' ? 'Event was unsubscribed' :
                success === 'EDIT_PASSWORD' ? 'Your password was changed' :
                    success === 'EDIT_PROFILE' ? 'Your profile was edited' :
                        success === 'SET_STATUS' ? 'Status was edited'
                            : false;
    }
};
