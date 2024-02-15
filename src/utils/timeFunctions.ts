const currentDay = new Date().toISOString().split("T")[0];
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

    return mainEventsUtcTimes.map((utcTimeString) => {
        const eventDate = new Date(utcTimeString);

        if (
            eventDate.getDate() === currentDate.getDate() &&
            eventDate.getTime() <= currentDate.getTime()
        ) {
            eventDate.setDate(eventDate.getDate() + 1); // Add 1 day
        }

        return eventDate.toISOString();
    });
};
