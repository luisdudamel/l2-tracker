export interface Event {
    key: string;
    eventName: string;
    serverTime: string;
    localTime: string;
    localTimeLeft: string;
}

export interface EventColumns {
    title: string;
    dataIndex: keyof Event;
    key: keyof Event;
}
