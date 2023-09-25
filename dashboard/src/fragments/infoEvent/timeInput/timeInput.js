import { inputsStyle } from '../style';

export const TimeInput = ({
    text,
    max,
    handleChange,
    right,
    error,
    type,
    name,
    placeholder,
    value,
    tittleDis,
    handleBlur,
    validator,
    sendBoolean,
}) => {
    const classes = inputsStyle();

    const chechValid = (e) => {
        handleBlur && handleBlur();
        let Value = e.target.value;
        if (Value.length >= 1) {
            if (validator) {
                if (validator.test(Value)) {
                    // setValidEmail(false);
                    sendBoolean(false);
                } else {
                    // setValidEmail(true);
                    sendBoolean(true);
                }
            }
        } else {
            sendBoolean && sendBoolean(false);
        }
    };

    return (
        <div style={{ width: '100%', marginRight: right, height: '88px' }}>
            <input
                style={error ? { border: '0.5px solid #F07379' } : { border: '0.5px solid #387DFF' }}
                className={classes.createEventInput}
                max={max}
                onChange={handleChange}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                // onFocus={() => setValidEmail(false)}
                onBlur={(e) => chechValid(e)}
            />
        </div>
    );
};
