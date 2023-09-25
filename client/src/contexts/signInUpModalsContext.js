import { createContext, useReducer } from 'react';

const initialState = {
    signInModal: true,
    signUpModal: false,
    welcomeModal: false,
    forgotPassword: false,
    checkEmail: false,
    codeVerification: false,
    resetPassword: false,
    successResetPassword: false,
    inviteMember: false,
};

const SignInUpModalsContext = createContext(initialState);

const { Provider } = SignInUpModalsContext;

const SignInUpModalsProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SIGN_IN_MODAL':
                return { ...state, signInModal: state.signInModal };
            case 'SIGN_UP_MODAL':
                return { ...state, signUpModal: !state.signUpModal };
            case 'WELCOME_MODAL':
                return { ...state, welcomeModal: !state.welcomeModal };
            case 'FORGOT_PASSWORD_MODAL':
                return { ...state, forgotPassword: !state.forgotPassword };
            case 'CHECK_EMAIL_MODAL':
                return { ...state, checkEmail: !state.checkEmail };
            case 'CODE_VERIFICATION_MODAL':
                return { ...state, codeVerification: !state.codeVerification };
            case 'RESET_PASSWORD_MODAL':
                return { ...state, resetPassword: !state.resetPassword };
            case 'SUCCESS_RESET_PASSWORD_MODAL':
                return { ...state, successResetPassword: !state.successResetPassword };

            default:
                throw new Error();
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { SignInUpModalsContext, SignInUpModalsProvider };
