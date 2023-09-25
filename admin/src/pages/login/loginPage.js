/**Login page */

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginPage} from './style';
import {Avatar, Button, CssBaseline, Typography, Container, CircularProgress} from '@material-ui/core';
import {ErrMessage, SignInInput} from 'components';
import {EmailValidator} from 'constants/index';
import {LockOutlined} from '@material-ui/icons';
import {authActions, httpRequestsOnErrorsActions} from 'store';
import {FindError, FindLoad} from "../../utils";


export function LoginPage() {
    const classes = loginPage();
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [validEmail, setValidEmail] = useState(false);

    // const { loginErr } = useSelector((state) => ({
    //     loginErr: state.auth.loginErr,
    //     // loader: state.auth.loader,
    // }));

    const logInRequest = () => {
        const user = {email: login, password};
        if (validEmail === false && login && login !== 'notMath' && password && password !== 'notMath') {
            dispatch(authActions.logIn(user));
        } else {
            if (!login) {
                setLogin('notMath');
            }
            if (!password) {
                setPassword('notMath');
            }
        }
    };

    const loader = FindLoad('LOG_IN')
    const backError = FindError('LOG_IN')
    const NotMathPassword = backError.length && backError[0].error === 'user password does not match';
    const NotMathEmail = backError.length && backError[0].error === 'Such user does not exist in our records';

    const handleChange = (ev) => {
        let {name, value} = ev.target;
        setError(null);
        if (backError.length) {
            dispatch(httpRequestsOnErrorsActions.removeError('LOG_IN'))
        }
        if (name === 'email') {
            setLogin(value);
            dispatch(authActions.clearError());
        } else if (name === 'password') {
            setPassword(value);
            dispatch(authActions.clearError());
        }
    };
    const handleCheck = (bool) => {
        setValidEmail(bool);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <SignInInput
                    validator={EmailValidator}
                    value={login}
                    onChange={handleChange}
                    sendBoolean={handleCheck}
                    typeError={NotMathEmail === true ? true : login === 'notMath' ? true : validEmail}
                    name={'email'}
                    type={'email'}
                    label={'Email'}
                    id={'email'}
                    autoComplete={'current-email'}
                />

                <SignInInput
                    id={'password'}
                    label={'Password'}
                    type={'password'}
                    autoComplete={'current-password'}
                    name={'password'}
                    value={password}
                    onChange={handleChange}
                    typeError={password === 'notMath' ? true : NotMathPassword}
                />
                {backError.length && <ErrMessage text={backError.length && backError[0].error}/>}


                <Button
                    onClick={logInRequest}
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    {!!loader.length ? <CircularProgress color={'inherit'}/> : 'Sign In'}

                </Button>

            </div>
        </Container>
    );
}
