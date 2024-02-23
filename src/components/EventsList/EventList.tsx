import { Flex, TableProps } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";
import {
    deleteCustomEventOnStorage,
    generateUpdatedTimes,
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
    const handleDeleteEvent = (eventId: string) => {
        deleteCustomEventOnStorage(eventId);
        setCurrentCustomEvents(
            currentCustomEvents.filter(
                (customEvent) => customEvent.key !== eventId
            )
        );
    };

    const customEventColumns: TableProps<UserCustomEvent>["columns"] = [
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
            render: (_, { key }: UserCustomEvent) => (
                <FontAwesomeIcon
                    className="delete-button"
                    onClick={() => handleDeleteEvent(key)}
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
                <Event
                    eventList={generateUpdatedTimes(utcDate, teamEvents)}
                    eventColumns={eventColumns}
                    eventsGroup="PVP Events"
                />
                <Event
                    eventList={generateUpdatedTimes(utcDate, epicBosses)}
                    eventColumns={eventColumns}
                    eventsGroup="Raid Bosses"
                />
            </Flex>
        </EventListStyled>
    );
};

export default EventList;
