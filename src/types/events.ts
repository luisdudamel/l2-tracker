export type Weekdays =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";

export interface TeamEvent {
    key: string;
    eventName: string;
    serverTime: string;
    localTime: string;
    localTimeLeft: string;
}

export interface EpicBossEvent {
    key: string;
    eventName: string;
    serverTime: string;
    localTime: string;
    localTimeLeft: string;
    eventDays: Weekdays[];
    windowStart: string;
}

export interface EventColumns {
    title: string;
    dataIndex: keyof TeamEvent;
    key: keyof TeamEvent;
}
