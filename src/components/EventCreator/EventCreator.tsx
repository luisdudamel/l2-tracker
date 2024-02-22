import { Button, Flex, Input } from "antd";
import { DatePicker } from "antd";
import { EventCreatorSyled } from "./EventCreatorStyled";
import { useEffect, useState } from "react";
import { CustomEvent } from "../../types/events";
import dayjs from "dayjs";
import moment from "moment-timezone";
import { updateCustomEvents } from "../../utils/timeFunctions";

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

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomEvent({
            ...customEvent,
            [event.target.id]: event.target.value,
        });
    };

    useEffect(() => {
        if (customEvent.eventName !== "" && customEvent.serverTime !== "") {
            setIsButtonDisabled(false);
            return;
        }
        setIsButtonDisabled(true);
    }, [customEvent.eventName, customEvent.serverTime, isButtonDisabled]);

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
            return;
        }
        setCustomEvent({
            ...customEvent,
            serverTime: "",
        });
    };

    const handleSubmit = () => {
        updateCustomEvents(customEvent);
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
                    placeholder="Select event local time"
                    allowClear
                    needConfirm={false}
                    showTime
                    onCalendarChange={(event) =>
                        handleDateChange(event as dayjs.Dayjs)
                    }
                />
                <Button
                    onClick={() => handleSubmit()}
                    disabled={isButtonDisabled}
                >
                    Create event
                </Button>
            </Flex>
        </EventCreatorSyled>
    );
};

export default EventCreator;
