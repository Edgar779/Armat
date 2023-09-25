export const ErrMessage = ({ text, style }) => {
    return (
        <div style={{ ...style }} className={'custom-error-messages'}>
            <span className="err-message-text">{text}</span>
        </div>
    );
};
