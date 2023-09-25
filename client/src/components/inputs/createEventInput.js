import { inputsStyle } from './styles';
import { InputTitle } from '../pageTitle/inputTitle';
import { useEffect, useState } from 'react';

export const CreateEventInput = ({
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
    marginTop,
    sendBoolean,
    validator,
    min,
}) => {
    const classes = inputsStyle();
    const [currentValue, setCurrentValue] = useState();
    const [validEmail, setValidEmail] = useState(false);

    useEffect(() => {
        if (value) {
            setCurrentValue(value);
        } else {
            setCurrentValue('');
        }
    }, [value]);
    const chechValid = (e) => {
        let Value = e.target.value;
        if (Value.length >= 1) {
            if (validator) {
                if (validator.test(Value)) {
                    setValidEmail(false);
                    sendBoolean(false);
                } else {
                    setValidEmail(true);
                    sendBoolean(true);
                }
            }
        } else {
            sendBoolean && sendBoolean(false);
        }
    };

    return (
        <div style={{ width: '100%', marginRight: right, height: '88px' }}>
            <InputTitle text={text} />
            <input
                style={
                    error
                        ? { border: '0.5px solid rgb(240, 115, 121)', marginTop: marginTop }
                        : { border: '0.5px solid #BEBEBE', marginTop: marginTop }
                }
                className={classes.createEventInput}
                onChange={handleChange}
                type={type}
                onFocus={() => setValidEmail(false)}
                onBlur={(e) => chechValid(e)}
                value={currentValue}
                defaultValue={currentValue}
                name={name}
                placeholder={placeholder}
                onKeyDown={type === 'date' ? (e) => e.preventDefault() : () => {}}
                min={min}
                max={max}
            />
        </div>
    );
};
