import { Button, Flex, Input } from "antd";
import { DatePicker } from "antd";
import { EventCreatorSyled } from "./EventCreatorStyled";
import { useEffect, useState } from "react";
import { UserCustomEvent } from "../../types/events";
import dayjs from "dayjs";
import moment from "moment-timezone";
import {
    getNextKey,
    updateCustomEventsOnStorage,
} from "../../utils/timeFunctions";

interface EventCreatorProps {
    currentCustomEvents: UserCustomEvent[];
    setCurrentCustomEvents: React.Dispatch<
        React.SetStateAction<UserCustomEvent[]>
    >;
}

const EventCreator = ({
    currentCustomEvents,
    setCurrentCustomEvents,
}: EventCreatorProps): JSX.Element => {
    const eventInitialState: UserCustomEvent = {
        isCustomEvent: true,
        eventName: "",
        key: "",
        id: 0,
        localTime: "",
        localTimeLeft: "",
        serverTime: "",
        windowStart: "",
    };
    const [customEvent, setCustomEvent] =
        useState<UserCustomEvent>(eventInitialState);

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const handleEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCustomEvent({
            ...customEvent,
            [event.target.id]: event.target.value,
            id: getNextKey(currentCustomEvents),
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
                .utc(dayjs(event).add(1, "hour").format())
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
        updateCustomEventsOnStorage([...currentCustomEvents, customEvent]);
        setCurrentCustomEvents([...currentCustomEvents, customEvent]);
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
                    placeholder="Select event server time"
                    allowClear
                    needConfirm={false}
                    showTime
                    minDate={dayjs()}
                    onCalendarChange={(event) =>
                        handleDateChange(event as dayjs.Dayjs)
                    }
                    value={null}
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
