import moment from "moment-timezone";
import {
    UserCustomEvent,
    EpicBossEvent,
    TeamEvent,
    Weekdays,
} from "../types/events";

export const generateUpdatedTimes = (
    currentServerTime: string,
    events: TeamEvent[] | EpicBossEvent[] | UserCustomEvent[]
): TeamEvent[] => {
    const currentDate = new Date(currentServerTime);
    return events
        .map((event) => {
            const eventDate = new Date(event.serverTime);
            if (eventDate < currentDate && eventDate.getHours() < 24) {
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
            return a.timeDifference - b.timeDifference;
        })
        .map((event, index) => {
            return {
                key: (index + 1).toString(),
                eventName: event.event.eventName,
                localTime: moment(event.eventDate).utc(true).format(),
                serverTime: event.time,
                localTimeLeft: "",
            };
        });
};

export const timeDifference = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedMinutes =
        remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;

    return `0${hours}:${formattedMinutes}`;
};

export const updateEpicEventsDates = (event: EpicBossEvent): Date | "Never" => {
    const now = moment().utc();

    const isTodayEventDay = event.eventDays.includes(
        now.format("dddd").toLowerCase() as Weekdays
    );

    if (isTodayEventDay) {
        event.serverTime = now
            .hour(Number(event.windowStart.split(":")[0]))
            .minutes(Number(event.windowStart.split(":")[1]))
            .format();

        return now.toDate();
    }

    const isTomorrowEventDay = event.eventDays.includes(
        now.add(1, "days").format("dddd").toLowerCase() as Weekdays
    );

    if (isTomorrowEventDay) {
        const tomorrowEpicServerDate = moment
            .utc()
            .add(1, "days")
            .hour(20)
            .minutes(0);
        event.serverTime = tomorrowEpicServerDate.format();
        return moment().add(1, "days").toDate();
    }

    for (let i = 1; i <= 6; i++) {
        const nextDay = moment().utc().add(i, "days");
        if (
            event.eventDays.includes(
                nextDay.format("dddd").toLowerCase() as Weekdays
            )
        ) {
            event.serverTime = nextDay
                .hour(Number(event.windowStart.split(":")[0]))
                .minutes(Number(event.windowStart.split(":")[1]))
                .format();
            return nextDay.toDate();
        }
    }

    return "Never";
};

export const updateCustomEventsOnStorage = (customEvent: UserCustomEvent) => {
    const storedCustomEvents = JSON.parse(
        localStorage.getItem("customEvents") || "[]"
    );

    storedCustomEvents.push(customEvent);
    localStorage.setItem("customEvents", JSON.stringify(storedCustomEvents));
};
