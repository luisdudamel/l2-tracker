import { Flex } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";
import { generateUpdatedTimes } from "../../utils/timeFunctions";
import moment from "moment-timezone";

const EventList = (): JSX.Element => {
    const utcDate = moment.utc().toISOString();

    return (
        <Flex justify="space-evenly" wrap="wrap" gap="large" align="start">
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
            <Event
                eventList={epicBosses}
                eventColumns={eventColumns}
                eventsGroup="My custom events"
            />
        </Flex>
    );
};

export default EventList;
