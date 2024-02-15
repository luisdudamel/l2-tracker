import { Event, EventColumns } from "../../types/events";

export const teamEvents: Event[] = [
    {
        key: "1",
        eventName: "Deathmatch",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "2",
        eventName: "Anakim vs Lilith",
        localTime: "03:00",
        timeLeft: "04:25",
    },
    {
        key: "3",
        eventName: "Team vs team",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "4",
        eventName: "Korean TVT",
        localTime: "01:00",
        timeLeft: "03:25",
    },
];
export const epicBosses: Event[] = [
    {
        key: "1",
        eventName: "Queen Ant",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "2",
        eventName: "Core",
        localTime: "03:00",
        timeLeft: "04:25",
    },
    {
        key: "3",
        eventName: "Orfen",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "4",
        eventName: "Baium",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "5",
        eventName: "Antharas",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "6",
        eventName: "Valakas",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "7",
        eventName: "Zaken",
        localTime: "01:00",
        timeLeft: "03:25",
    },
    {
        key: "8",
        eventName: "Frintezza",
        localTime: "01:00",
        timeLeft: "03:25",
    },
];

export const eventColumns: EventColumns[] = [
    {
        title: "Event",
        dataIndex: "eventName",
        key: "eventName",
    },
    {
        title: "Your local time",
        dataIndex: "localTime",
        key: "localTime",
    },
    {
        title: "Time left",
        dataIndex: "timeLeft",
        key: "timeLeft",
    },
];
