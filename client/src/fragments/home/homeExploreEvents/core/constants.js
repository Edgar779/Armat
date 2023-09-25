export const image = {
    xlJPG: '/assets/images/home/explore/HomepageImageWeb.png',
    lgJPG: '/assets/images/home/explore/HomepageImageWeb.png',
    mdJPG: '/assets/images/home/explore/HomepageImageWeb.png',
    smJPG: '/assets/images/home/explore/HomepageImageWeb.png',
    title: '',
    alt: 'home_header_image',
};

export const gradient = {
    xlJPG: '/assets/images/home/explore/RadicalGradient.png',
    lgJPG: '/assets/images/home/explore/RadicalGradient.png',
    mdJPG: '/assets/images/home/explore/RadicalGradient.png',
    smJPG: '/assets/images/home/explore/RadicalGradient.png',
};

export const title = 'Sign Up to Stay Connected'.toUpperCase();

export const desc =
    'Create an account to subscribe to events and receive reminders right in your email inbox. Stay up to date with all the events happening in your local Armenian community.';

export const options = [
    { title: 'Set the date range' },
    { title: 'Choose between categories & types' },
    { title: 'Select event organizers' },
];

export const but = 'Explore Upcoming Events';

const date = new Date();

export const fakeEvents = [
    {
        thumbnailUrl: '/assets/images/events/Event1.jpg',
        title: 'Event name',
        description: 'Event Description',
        id: '6078d23f75e4218079646f60',
        startDate: date.setDate(date.getDate() + 1),
    },
    {
        thumbnailUrl: '/assets/images/events/Event2.jpg',
        title: 'Event name',
        description: 'Event Description',
        id: '6078d26709941580aefe37ee',
        startDate: date.setDate(date.getDate() + 7),
    },
    {
        thumbnailUrl: '/assets/images/events/Event3.jpg',
        title: 'Event name',
        description: 'Event Description',
        id: '607e8c2c5b7d844194098cc7',
        startDate: date.setMonth(date.getDate() + 1),
    },
    {
        thumbnailUrl: '/assets/images/events/Event4.jpg',
        title: 'Event name',
        description: 'Event Description',
        id: '607e8c315b7d844194098ccc',
        startDate: date.setMonth(date.getDate() + 2),
    },
];
