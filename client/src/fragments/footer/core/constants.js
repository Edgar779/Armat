import { SVGNames } from 'constants/index';

export const logoImage = {
    src: '/logos/Footer_Logo.svg',
    alt: 'footer logo',
};

export const bgImage = {
    xlJPG: '/assets/images/footer/bigDesk.svg',
    lgJPG: '/assets/images/footer/smallDesk.svg',
    mdJPG: '/assets/images/footer/tablet.svg',
    smJPG: '/assets/images/footer/mobile.svg',
    title: '',
    alt: 'footer_bg_image',
};

export const copyright = {
    text: '© 2021 - Armat. Powered by',
    link: 'https://eachbase.com/',
    linkName: 'Eachbase',
};

export const links = [
    {
        link: '/termAndCondition',
        name: 'Terms & Conditions',
    },
    {
        link: '/privacyPolicy',
        name: 'Privacy Policy',
    },
];

export const socialMedia = {
    title: 'Find Us On:',
    items: [
        {
            link: '/termAndCondition',
            name: 'terms & conditions',
        },
        {
            link: '/privacyPolicy',
            name: 'privacy policy',
        },
    ],
    socialMedia: {
        title: 'Find Us On:',
        items: [
            {
                icon: SVGNames.FacebookFill,
                link: 'https://www.facebook.com/armatapp/',
            },
            {
                icon: SVGNames.InstagramOutline,
                link: 'https://www.instagram.com/armatplatform/',
            },
            {
                icon: SVGNames.TwitterFill,
                link: 'https://twitter.com/armatplatform',
            },
        ],
    },
};

export const contactUs = {
    title: 'Contact Us',
    contactName: {
        machineName: 'name',
        label: 'Name',
        type: 'textfield',
        placeholder: 'Name',
        required: true,
        variant: 'outlined',
        defaultValue: '',
    },
    email: {
        machineName: 'email',
        label: 'Email',
        type: 'textfield',
        placeholder: 'Email Address',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
    },

    message: {
        machineName: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Type your message here...',
        required: true,
        rows: 8,
        rowsMax: 8,
        variant: 'outlined',
        defaultValue: '',
    },
};

export const subscribeData = {
    title: 'Subscribe to Our Newsletter',
    body: 'Receive the latest news and updates about armat.org by signing up for our mailing list.',
    email: {
        machineName: 'email',
        label: 'Email',
        type: 'textfield',
        placeholder: 'Email*',
        required: true,
        variant: 'outlined',
        defaultValue: '',
        inputType: 'email',
    },
};
