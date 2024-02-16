import moment from "moment-timezone";
import { Event } from "../types/events";

export const generateUpdatedTimes = (
    currentServerTime: string,
    events: Event[]
): Event[] => {
    const currentDate = new Date(currentServerTime);

    return events
        .map((event) => {
            const eventDate = new Date(event.serverTime);

            if (eventDate < currentDate && eventDate.getHours() < 23) {
                eventDate.setHours(new Date(event.serverTime).getHours());
                eventDate.setDate(eventDate.getDate() + 1);
            }

            const timeDifference = eventDate.getTime() - currentDate.getTime();

            return {
                event,
                eventDate,
                time: eventDate.toISOString(),
                timeDifference,
            };
        })
        .sort((a, b) => {
            if (a.eventDate < b.eventDate) return -1;
            if (a.eventDate > b.eventDate) return 1;
            return a.timeDifference - b.timeDifference;
        })
        .map((event, index) => {
            return {
                key: (index + 1).toString(),
                eventName: event.event.eventName,
                localTime: moment(event.eventDate).local().format("HH:mm"),
                serverTime: event.time,
                localTimeLeft: "",
            };
        });
};
