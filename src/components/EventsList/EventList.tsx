import { Flex, TableColumnsType } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";
import {
    generateUpdatedTimes,
    updateCustomEventsOnStorage,
} from "../../utils/timeFunctions";
import moment from "moment-timezone";
import { EventListStyled } from "./EventListStyled";
import { EventColumns, UserCustomEvent } from "../../types/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

interface EventListProps {
    currentCustomEvents: UserCustomEvent[];
    setCurrentCustomEvents: React.Dispatch<
        React.SetStateAction<UserCustomEvent[]>
    >;
}

const EventList = ({
    currentCustomEvents,
    setCurrentCustomEvents,
}: EventListProps): JSX.Element => {
    const handleDeleteEvent = (eventId: number) => {
        const filteredEvents = currentCustomEvents.filter(
            (customEvent) => customEvent.id !== eventId
        );
        setCurrentCustomEvents(filteredEvents);
        updateCustomEventsOnStorage(filteredEvents);
    };

    const customEventColumns: TableColumnsType<UserCustomEvent> = [
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
        {
            title: "Delete",
            dataIndex: "",
            render: (_, { id }: UserCustomEvent) => (
                <FontAwesomeIcon
                    className="delete-button"
                    onClick={() => {
                        handleDeleteEvent(id);
                    }}
                    icon={faTrashCan}
                />
            ),
            key: "deleteButton",
        },
    ];

    const utcDate = moment.utc().toISOString();

    return (
        <EventListStyled>
            <Flex justify="space-evenly" wrap="wrap" gap="large" align="start">
                <Event
                    eventList={generateUpdatedTimes(
                        utcDate,
                        currentCustomEvents
                    )}
                    eventColumns={customEventColumns as EventColumns[]}
                    eventsGroup="My custom events"
                />
                {
                    <Event
                        eventList={generateUpdatedTimes(utcDate, teamEvents)}
                        eventColumns={eventColumns}
                        eventsGroup="PVP Events"
                    />
                }
                {
                    <Event
                        eventList={generateUpdatedTimes(utcDate, epicBosses)}
                        eventColumns={eventColumns}
                        eventsGroup="Raid Bosses"
                    />
                }
            </Flex>
        </EventListStyled>
    );
};

export default EventList;
