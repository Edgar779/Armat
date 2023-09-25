import { Svg } from "../assets";

// Routers Info

export const RoutersInfo = () => {
    return [
        {
            key: 1,
            name: 'Members',
            path: '/members',
            activeIcon: Svg.MembersIconActive,
            icon: Svg.MembersIcon,
            alt: 'Members',
        },
        {
            key: 2,
            name: 'Events',
            path: '/events',
            activeIcon: Svg.EventIconActive,
            icon: Svg.EventsIcon,
            alt: 'Events',
        },
        {
            key: 3,
            name: 'Tickets',
            path: '/tickets',
            activeIcon: Svg.ticketActive,
            icon: Svg.ticketPassive,
            alt: 'Tickets',
        },
        {
            key: 4,
            name: 'Tickets Check-In',
            path: '/ticket',
            activeIcon: Svg.ticketCheckActive,
            icon: Svg.ticketCheckPassive,
            alt: 'Tickets Check-In',
        },
        {
            key: 5,
            name: 'Organization Info',
            path: '/organization',
            activeIcon: Svg.OrganizationActive,
            icon: Svg.OrganizationIcon,
            alt: 'Organization',
        },
    ];
};
