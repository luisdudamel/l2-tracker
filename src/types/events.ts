export type Weekdays =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";

type Event = {
    key: string;
    eventName: string;
    serverTime: string;
    localTime: string;
    localTimeLeft: string;
    isCustomEvent: boolean;
};

export type TeamEvent = Event;

export type UserCustomEvent = TeamEvent & {
    windowStart: string;
    deleteButton?: JSX.Element;
    id: number;
};

export type EpicBossEvent = Event & {
    eventDays: Weekdays[];
    windowStart: string;
};

export type EventColumns = {
    title: string;
    dataIndex: keyof TeamEvent;
    key: keyof TeamEvent;
};

export type CustomEventColumns = {
    title: string;
    dataIndex: keyof UserCustomEvent;
    key: keyof UserCustomEvent;
};
