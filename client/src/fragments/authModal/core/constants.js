import { SVGNames } from 'constants/index';

export const image = {
    xlJPG: '/assets/images/sign-in-up/calendar.svg',
    xlWEBP: '/assets/images/sign-in-up/calendar.svg',
    lgJPG: '/assets/images/sign-in-up/calendar.svg',
    lgWEBP: '/assets/images/sign-in-up/calendar.svg',
    title: '',
    alt: 'navigation_menu',
};
export const socialMedia = [
    {
        link: '/user/google',
        icon: SVGNames.GoogleColor,
    },
    {
        link: '/user/facebook',
        icon: SVGNames.FacebookFill,
        color: '#3B5998',
    },
    {
        link: '/user/twitter',
        icon: SVGNames.TwitterFill,
        color: '#03A9F4',
    },
    {
        link: '/user/apple',
        icon: SVGNames.AppleFill,
        color: '#252E48',
    },
];

export const signIn = {
    title: 'Sign In',
    socialMedia: 'Sign in with your social media account',
    email: {
        machineName: 'email',
        type: 'textfield',
        placeholder: 'Email/Phone Number*',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
        icon: SVGNames.EmailOutline,
    },
    phone: {
        machineName: 'phoneNumber',
        type: 'textfield',
        placeholder: 'Phone Number*',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'phoneNumber',
        icon: SVGNames.Phone,
    },

    password: {
        machineName: 'password',
        type: 'passwrod',
        placeholder: 'Password*',
        required: true,
        defaultValue: '',
        variant: 'outlined',
        icon: SVGNames.PasswordOutline,
    },
    submit: {
        machineName: 'button',
        type: 'button',
        inputType: 'submit',
        label: 'Continue',
        variant: 'contained',
    },

    remember: {
        machineName: 'remember',
        type: 'checkbox',
        label: 'Remember me',
        value: 'start',
        defaultValue: false,
        required: false,
    },
    forgotPassword: {
        machineName: 'forgotPassword',
        type: 'button',
        inputType: 'button',
        label: 'Forgot Password?',
    },

    otherText: 'Already have an account?',
};
export const signUp = {
    title: 'Sign Up',
    socialMedia: 'Sign up with your social media account',
    fullName: {
        machineName: 'fullName',
        type: 'textfield',
        placeholder: 'Full Name*',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        icon: SVGNames.UserOutline,
    },
    email: {
        machineName: 'email',
        type: 'textfield',
        placeholder: 'Email*',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
        icon: SVGNames.EmailOutline,
    },
    phone: {
        machineName: 'phoneNumber',
        type: 'textfield',
        placeholder: 'Phone Number',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'phoneNumber',
        icon: SVGNames.Phone,
    },
    password: {
        machineName: 'password',
        type: 'passwrod',
        placeholder: 'Password*',
        required: true,
        defaultValue: '',
        variant: 'outlined',
        icon: SVGNames.PasswordOutline,
    },
    confPassword: {
        machineName: 'confirmPassword',
        type: 'passwrod',
        placeholder: 'Confirm Password*',
        required: true,
        defaultValue: '',
        variant: 'outlined',
        icon: SVGNames.PasswordOutline,
    },
    /* {
                        machineName: 'button',
                        type: 'button',
                        inputType: 'submit',
                        label: 'Sign Up',
                        variant: 'contained',
                    }, */

    otherText: 'By signing up, you agree to',
};
export const welcome = {
    title: 'Welcome to Armat',
    subTitle: 'CONGRATULATIONS!',
    description: 'Create events and stay tuned to our calendar for exciting upcoming events.',
    image: {
        xlJPG: '/assets/images/sign-in-up/welcome.svg',
        xlWEBP: '/assets/images/sign-in-up/welcome.svg',
        lgJPG: '/assets/images/sign-in-up/welcome.svg',
        lgWEBP: '/assets/images/sign-in-up/welcome.svg',
        mdJPG: '/assets/images/sign-in-up/welcome.svg',
        mdWEBP: '/assets/images/sign-in-up/welcome.svg',
        smJPG: '/assets/images/sign-in-up/welcome.svg',
        smWEBP: '/assets/images/sign-in-up/welcome.svg',
        title: '',
        alt: 'welcome',
    },
};
export const forgotPassword = {
    title: 'Forgot your Password?',
    body: "Don't worry! Enter your email address and we'll send you a verification code to reset your password.",
    email: {
        machineName: 'email',
        placeholder: 'Email',
        label: 'Email',
        type: 'textfield',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
        icon: SVGNames.EmailOutline,
    },
};
export const checkEmail = {
    title: 'Check in your Email!',
    body: 'We just sent an email to testuser@gmail.com with a verification code to reset your password.',
    image: {
        xlJPG: '/assets/images/sign-in-up/checkEmail.svg',
        lgJPG: '/assets/images/sign-in-up/checkEmail.svg',
        mdJPG: '/assets/images/sign-in-up/checkEmail.svg',
        smJPG: '/assets/images/sign-in-up/checkEmail.svg',
        title: '',
        alt: 'CheckEmail',
    },
    button: 'Close',
};
export const codeVerification = {
    title: 'Verification Code',
    body: 'Enter the verification code sent to testuser@gmail.com',
    form: {
        fieldsGroup: [
            {
                fields: [
                    {
                        machineName: 'codeVerification',
                        type: 'codeVerification',
                        placeholders: ['0', '0', '0', '0', '0', '0'],
                        required: true,
                        defaultValue: '',
                    },
                    {
                        machineName: 'button',
                        type: 'button',
                        inputType: 'submit',
                        label: 'Verify',
                        variant: 'contained',
                    },
                ],
            },
        ],
    },
};
export const resetPassword = {
    title: 'Reset Password',
    body: 'Enter your new password. Use at least 8 characters, 1 upper case and 1 digit',
    newPassword: {
        machineName: 'password',
        placeholder: 'New Password',
        label: 'Password',
        type: 'passwrod',
        required: true,
        defaultValue: '',
        variant: 'outlined',
        icon: SVGNames.PasswordOutline,
    },
    confirmation: {
        machineName: 'confirmPassword',
        placeholder: 'Confirm Password',

        label: 'Confirm Password',
        type: 'passwrod',
        required: true,
        defaultValue: '',
        variant: 'outlined',
        icon: SVGNames.PasswordOutline,
    },
};
export const successResetPassword = {
    title: 'Successful Password Reset!',
    body: 'You can now use your new password to sign in to your account.',
    image: {
        xlJPG: '/assets/images/sign-in-up/passwordReset.svg',
        xlWEBP: '/assets/images/sign-in-up/passwordReset.svg',
        lgJPG: '/assets/images/sign-in-up/passwordReset.svg',
        lgWEBP: '/assets/images/sign-in-up/passwordReset.svg',
        mdJPG: '/assets/images/sign-in-up/passwordReset.svg',
        mdWEBP: '/assets/images/sign-in-up/passwordReset.svg',
        smJPG: '/assets/images/sign-in-up/passwordReset.svg',
        smWEBP: '/assets/images/sign-in-up/passwordReset.svg',
        title: '',
        alt: 'PasswordReset',
    },
    button: 'Sign In',
};

export const inviteMember = {
    title: 'Want to Invite People?',
    body: 'Inviting people enables them to become Verified Members & create events.',
    image: {
        xlJPG: '/assets/images/sign-in-up/InvitePeople_1920_Success.svg',
        lgJPG: '/assets/images/sign-in-up/InvitePeople_Standard_Success.svg',
        mdJPG: '/assets/images/sign-in-up/InvitePeople_Standart_Success.svg',
        smJPG: '/assets/images/sign-in-up/InvitePeople_375_Success.svg',
        title: '',
        alt: 'invite',
    },
    email: {
        machineName: 'email',
        placeholder: 'Email',
        label: 'Email',
        type: 'textfield',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
        icon: SVGNames.EmailOutline,
    },
};
export const screens = {
    signIn: 'signIn',
    signUp: 'signUp',
    forgotPass: 'forgotPass',
    checkEmail: 'checkEmail',
    resetPass: 'resetPass',
    successResetPass: 'successResetPass',
    welcome: 'welcome',
    inviteMember: 'inviteMember',
};
