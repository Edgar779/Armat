import { SVGNames } from 'constants/index';

export const inviteMemberSuccess = {
    title: 'YAY! \n INVITATION SUCCESS',
    button: 'Done',
    image: {
        xlJPG: '/assets/images/sign-in-up/InvitePeople_1920_Success.svg',
        lgJPG: '/assets/images/sign-in-up/InvitePeople_1920_Success.svg',
        mdJPG: '/assets/images/sign-in-up/InvitePeople_1920_Success.svg',
        smJPG: '/assets/images/sign-in-up/InvitePeople_1920_Success.svg',
        title: '',
        alt: 'welcome',
    },
};
export const inviteMemberError = {
    title: 'OOPS! \n INVITATION FAILURE',
    button: 'Try Again',
    image: {
        xlJPG: '/assets/images/sign-in-up/InvitePeople_1920_Fail.svg',
        lgJPG: '/assets/images/sign-in-up/InvitePeople_Standard_Fail.svg',
        mdJPG: '/assets/images/sign-in-up/InvitePeople_Standard_Fail.svg',
        smJPG: '/assets/images/sign-in-up/InvitePeople_375_Fail.svg',
        title: '',
        alt: 'welcome',
    },
};
export const inviteMember = {
    title: 'Want to Invite People?',
    body: 'Inviting people enables them to become Verified Members & create events.',
    image: {
        xlJPG: '/assets/images/sign-in-up/InvitePeople_1920.svg',
        lgJPG: '/assets/images/sign-in-up/InvitePeople_1920.svg',
        title: '',
        alt: 'PasswordReset',
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
    inviteMemberSuccess: 'inviteMemberSuccess',
    inviteMemberError: 'inviteMemberError',
    inviteMember: 'inviteMember',
};
