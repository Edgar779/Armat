import React from 'react';

const Error = ({ touched, message }) => (
    <div
        style={{
            margin: '0',
            padding: '0',
            height: '20px',
            width: '100%',
            marginTop: '10px !important',
            marginLeft: '12px',
        }}>
        {touched && message ? <p style={{ color: '#F07379', fontSize: '14px', margin: 0, padding: 0 }}>{message}</p> : null}
    </div>
);

export default Error;
