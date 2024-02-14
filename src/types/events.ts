export interface Event {
    key: string;
    eventName: string;
    localTime: string;
    timeLeft: string;
}

export interface EventColumns {
    title: string;
    dataIndex: keyof Event;
    key: keyof Event;
}
