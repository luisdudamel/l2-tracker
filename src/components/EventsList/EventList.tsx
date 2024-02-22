import { Flex, TableProps } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";
import { generateUpdatedTimes } from "../../utils/timeFunctions";
import moment from "moment-timezone";
import { EventListStyled } from "./EventListStyled";
import { EventColumns, UserCustomEvent } from "../../types/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

interface EventListProps {
    currentCustomEvents: UserCustomEvent[];
}

const EventList = ({ currentCustomEvents }: EventListProps): JSX.Element => {
    const customEventColumns: TableProps<EventColumns>["columns"] = [
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
            render: () => <FontAwesomeIcon icon={faTrashCan} />,
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
                    eventColumns={customEventColumns}
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
