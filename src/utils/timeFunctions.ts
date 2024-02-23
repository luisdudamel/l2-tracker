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
): TeamEvent[] | UserCustomEvent[] => {
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
            if (event.event.isCustomEvent) {
                return {
                    key: (index + 1).toString(),
                    id: (event.event as UserCustomEvent).id,
                    eventName: event.event.eventName,
                    localTime: moment(event.event.serverTime)
                        .utc(true)
                        .format(),
                    serverTime: event.time,
                    localTimeLeft: "",
                    isCustomEvent: event.event.isCustomEvent,
                };
            }

            return {
                key: (index + 1).toString(),
                eventName: event.event.eventName,
                localTime: moment(event.eventDate).utc(true).format(),
                serverTime: event.time,
                localTimeLeft: "",
                isCustomEvent: event.event.isCustomEvent,
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

export const updateCustomEventsOnStorage = (
    customEvents: UserCustomEvent[]
) => {
    customEvents.forEach(
        (event, index) => (event.key = (index + 1).toString())
    );
    localStorage.setItem("customEvents", JSON.stringify(customEvents));
};

export const deleteCustomEventOnStorage = (eventKey: string) => {
    const storedCustomEvents = JSON.parse(
        localStorage.getItem("customEvents") || "[]"
    ) as UserCustomEvent[];
    localStorage.removeItem("customEvents");

    const filteredEvents = storedCustomEvents.filter(
        (event) => event.key !== eventKey
    );
    filteredEvents.forEach(
        (event, index) => (event.key = (index + 1).toString())
    );
    localStorage.setItem("customEvents", JSON.stringify(filteredEvents));
};

export const getNextKey = (currentUserEvents: UserCustomEvent[]): number => {
    if (!currentUserEvents.length) {
        return 1;
    }

    const maxId = Math.max(
        ...currentUserEvents.map((currentEvent) => currentEvent.id)
    );
    return isNaN(maxId) ? 1 : maxId + 1;
};
