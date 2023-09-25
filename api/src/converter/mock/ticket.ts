import { IEvent } from "src/event";

/** generate ticket data */
export function ticketData(event: IEvent, ticketName: string, displayId: string, qrLink: string) {
    const date = new Date(event.startDate);
    return {
        eventTitle: event.title,
        eventAddress: event.address?.formattedAddress,
        img: event.images[0]?.url,
        day: date.getDate(),
        dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
        time: date.getHours() + ":" + date.getMinutes(),
        month: date.getMonth(),
        year: date.getFullYear(),
        ticketName,
        displayId,
        qrLink,
    };
}