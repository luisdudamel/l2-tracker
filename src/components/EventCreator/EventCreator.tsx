import { Flex, Input } from "antd";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { EventCreatorSyled } from "./EventCreatorStyled";
import { useState } from "react";
import { CustomEvent } from "../../types/events";
import dayjs from "dayjs";
import moment from "moment-timezone";

const EventCreator = (): JSX.Element => {
    const eventInitialState: CustomEvent = {
        eventName: "",
        key: "",
        localTime: "",
        localTimeLeft: "",
        serverTime: "",
        windowStart: "",
    };
    const [customEvent, setCustomEvent] =
        useState<CustomEvent>(eventInitialState);

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomEvent({
            ...customEvent,
            [event.target.id]: event.target.value,
        });
    };

    const handleDateChange = (event: dayjs.Dayjs | null | undefined) => {
        if (event) {
            const customEventToServerUTC = moment
                .tz(dayjs(event).toISOString(), "YYYY-MM-DDTHH:mm:ssZ")
                .utc()
                .format();

            setCustomEvent({
                ...customEvent,
                serverTime: customEventToServerUTC,
            });
        }
    };

    return (
        <EventCreatorSyled>
            <Flex justify="flex-start" wrap="wrap" gap="large" align="start">
                <div className="event__name-container">
                    <Input
                        id="eventName"
                        allowClear
                        placeholder="Enter your event name"
                        onChange={(event) => handleEvent(event)}
                    />
                </div>
                <DatePicker
                    allowClear
                    showTime
                    onOk={(event) => handleDateChange(event)}
                />
            </Flex>
        </EventCreatorSyled>
    );
};

export default EventCreator;
