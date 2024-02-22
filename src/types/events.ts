export type Weekdays =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";

interface Event {
    key: string;
    eventName: string;
    serverTime: string;
    localTime: string;
    localTimeLeft: string;
}

export interface TeamEvent extends Event {}

export interface CustomEvent extends TeamEvent {
    windowStart: string;
}

export interface EpicBossEvent extends Event {
    eventDays: Weekdays[];
    windowStart: string;
}

export interface EventColumns {
    title: string;
    dataIndex: keyof TeamEvent;
    key: keyof TeamEvent;
}
