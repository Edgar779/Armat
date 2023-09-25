export const Error = ({ touched, message }) => (
    <div
        style={{
            height: '14px',
            width: '100%',
            marginTop: '-13px',
            marginLeft: '13%',
        }}>
        {touched && message ? <p style={{ color: '#F07379', fontSize: '12px', margin: 0, padding: 0 }}>{message}</p> : null}
    </div>
);

export default Error;
