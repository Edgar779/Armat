import { SVGNames } from 'constants/index';
//
// export const organizerLinks = [
//     {
//         name: 'My Events',
//         link: '/myEvents',
//         icon: SVGNames.EventIcon1,
//     },
//     {
//         name: 'My Profile',
//         link: '/myProfile',
//         icon: SVGNames.ProfileIcon,
//     },
//     {
//         name: 'My Subscriptions',
//         link: '/mySubscriptions',
//         icon: SVGNames.SubscriptionOutline1,
//     },
//     {
//         name: 'My Tickets',
//         link: '/myTickets',
//         icon: SVGNames.MyTickets,
//     },
//     {
//         name: 'Billing Info',
//         link: '/billing',
//         icon: SVGNames.Billing,
//     },
//     {
//         name: 'Dashboard View',
//         link: '/mySubscriptions',
//         icon: SVGNames.DashboardView,
//     },
//     {
//         name: 'Invite People',
//         link: '/',
//         icon: SVGNames.InvitePeople,
//     },
//     {
//         name: 'Sign Out',
//         link: '/',
//         icon: SVGNames.LogOut,
//     },
// ];
//
// export const verifiedLinks = [
//     {
//         name: 'My Events',
//         link: '/myEvents',
//         icon: SVGNames.EventIcon1,
//     },
//     {
//         name: 'My Profile',
//         link: '/myProfile',
//         icon: SVGNames.ProfileIcon,
//     },
//     {
//         name: 'My Subscriptions',
//         link: '/mySubscriptions',
//         icon: SVGNames.SubscriptionOutline1,
//     },
//     {
//         name: 'My Tickets',
//         link: '/myTickets',
//         icon: SVGNames.MyTickets,
//     },
//     {
//         name: 'Billing Info',
//         link: '/billing',
//         icon: SVGNames.Billing,
//     },
//     {
//         name: 'Sign Out',
//         link: '/',
//         icon: SVGNames.LogOut,
//     },
// ];
//
// export const pageLinksMember = [
//     {
//         name: 'My Profile',
//         link: '/myProfile',
//         icon: SVGNames.ProfileIcon,
//     },
//     {
//         name: 'My Subscriptions',
//         link: '/mySubscriptions',
//         icon: SVGNames.SubscriptionOutline1,
//     },
//     {
//         name: 'My Tickets',
//         link: '/myTickets',
//         icon: SVGNames.MyTickets,
//     },
//     {
//         name: 'Billing Info',
//         link: '/billing',
//         icon: SVGNames.Billing,
//     },
//     {
//         name: 'Sign Out',
//         link: '/',
//         icon: SVGNames.LogOut,
//     },
// ];

export const linksView = (type) => {
    const aminRole = type?.orgs?.find((i) => i?.userType === 'ORGADMIN');
    const managerRole = type?.orgs?.find((i) => i?.userType === 'ORGMANAGER');
    const admin = JSON.parse(localStorage.getItem('userInfo'));


    return [
        {
            name: 'My Profile',
            link: '/myProfile',
            icon: SVGNames.ProfileIcon,
        },
        {
            name: 'My Subscriptions',
            link: '/mySubscriptions',
            icon: SVGNames.SubscriptionOutline1,
        },
        {
            name: 'My Tickets',
            link: '/myTickets',
            icon: SVGNames.MyTickets,
        },
        {
            name: 'Billing Info',
            link: '/billing',
            icon: SVGNames.Billing,
        },

        (aminRole?.userType || managerRole?.userType || admin?.auth?.role === 'ADMIN') && {
            name: 'Dashboard View',
            link: '/dashboard/members',
            icon: SVGNames.DashboardView,
        },

        {
            name: 'Invite People',
            link: '/',
            icon: SVGNames.InvitePeople,
        },
        {
            name: 'Sign Out',
            link: '/',
            icon: SVGNames.LogOut,
        },
    ];
};
