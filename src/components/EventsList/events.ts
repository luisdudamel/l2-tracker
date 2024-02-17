import { TeamEvent, EventColumns, EpicBossEvent } from "../../types/events";
import moment from "moment-timezone";

const currentDay = moment().utc().format("YYYY-MM-DD");
const currentServerTime = moment().utc().format();

export const teamEvents: TeamEvent[] = [
    {
        key: "1",
        eventName: "Deathmatch",
        localTime: ``,
        serverTime: `${currentDay}T00:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "2",
        eventName: "Anakim vs Lilith",
        localTime: "03:00",
        serverTime: `${currentDay}T02:00:00.000Z`,
        localTimeLeft: "04:25",
    },
    {
        key: "3",
        eventName: "Korean TVT",
        localTime: "01:00",
        serverTime: `${currentDay}T04:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "4",
        eventName: "Team vs team",
        localTime: "01:00",
        serverTime: `${currentDay}T06:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "5",
        eventName: "Deathmatch",
        localTime: "01:00",
        serverTime: `${currentDay}T08:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "6",
        eventName: "Anakim vs Lilith",
        localTime: "01:00",
        serverTime: `${currentDay}T10:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "7",
        eventName: "Korean TVT",
        localTime: "01:00",
        serverTime: `${currentDay}T12:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "8",
        eventName: "Team vs team",
        localTime: "01:00",
        serverTime: `${currentDay}T14:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "9",
        eventName: "Deathmatch",
        localTime: "01:00",
        serverTime: `${currentDay}T16:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "10",
        eventName: "Anakim vs Lilith",
        localTime: "01:00",
        serverTime: `${currentDay}T18:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "11",
        eventName: "Korean TVT",
        localTime: "01:00",
        serverTime: `${currentDay}T20:00:00.000Z`,
        localTimeLeft: "03:25",
    },
    {
        key: "12",
        eventName: "Team vs team",
        localTime: "01:00",
        serverTime: `${currentDay}T22:00:00.000Z`,
        localTimeLeft: "03:25",
    },
];
export const epicBosses: EpicBossEvent[] = [
    {
        key: "1",
        eventName: "Queen Ant",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
        ],
        windowStart: "21:30",
    },
    {
        key: "2",
        eventName: "Core",
        localTime: "03:00",
        serverTime: currentServerTime,
        localTimeLeft: "04:25",
        eventDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        windowStart: "19:00",
    },

    {
        key: "3",
        eventName: "Orfen",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["monday", "tuesday", "wednesday", "thursday", "friday"],
        windowStart: "19:15",
    },
    {
        key: "4",
        eventName: "Baium",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["saturday"],
        windowStart: "20:00",
    },
    {
        key: "5",
        eventName: "Antharas",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["sunday"],
        windowStart: "20:30",
    },
    {
        key: "6",
        eventName: "Valakas",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["sunday"],
        windowStart: "20:00",
    },
    {
        key: "7",
        eventName: "Zaken",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["monday", "wednesday", "friday"],
        windowStart: "19:30",
    },
    {
        key: "8",
        eventName: "Frintezza",
        localTime: "01:00",
        serverTime: currentServerTime,
        localTimeLeft: "03:25",
        eventDays: ["tuesday", "thursday", "sunday"],
        windowStart: "19:30",
    },
];

export const eventColumns: EventColumns[] = [
    {
        title: "Event",
        dataIndex: "eventName",
        key: "eventName",
    },
    {
        title: "Event local time",
        dataIndex: "localTime",
        key: "localTime",
    },
    {
        title: "Window starts",
        dataIndex: "localTimeLeft",
        key: "localTimeLeft",
    },
];
