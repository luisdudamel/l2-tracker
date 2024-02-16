import moment from "moment-timezone";

const currentDay = moment().utc().format("YYYY-MM-DD");

const mainEventsUtcTimes = [
    `${currentDay}T00:00:00.000Z`,
    `${currentDay}T02:00:00.000Z`,
    `${currentDay}T04:00:00.000Z`,
    `${currentDay}T06:00:00.000Z`,
    `${currentDay}T08:00:00.000Z`,
    `${currentDay}T10:00:00.000Z`,
    `${currentDay}T12:00:00.000Z`,
    `${currentDay}T14:00:00.000Z`,
    `${currentDay}T16:00:00.000Z`,
    `${currentDay}T18:00:00.000Z`,
    `${currentDay}T20:00:00.000Z`,
    `${currentDay}T22:00:00.000Z`,
];

export const generateUpdatedTimes = (currentServerTime: string): string[] => {
    const currentDate = new Date(currentServerTime);

    return mainEventsUtcTimes
        .map((utcTimeString) => {
            const eventDate = new Date(utcTimeString);

            if (eventDate < currentDate && eventDate.getHours() < 23) {
                eventDate.setHours(new Date(utcTimeString).getHours());
                eventDate.setDate(eventDate.getDate() + 1);
            }

            const timeDifference = eventDate.getTime() - currentDate.getTime();

            return {
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
        .map((item) => item.time);
};
