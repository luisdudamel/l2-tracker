import { Flex } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";
import { generateUpdatedTimes } from "../../utils/timeFunctions";
import moment from "moment-timezone";

const EventList = (): JSX.Element => {
    const utcDate = moment.utc().toISOString();

    return (
        <Flex justify="space-evenly" wrap="wrap" gap="large" align="center">
            <Event eventList={epicBosses} eventColumns={eventColumns} />
            <Event eventList={epicBosses} eventColumns={eventColumns} />
            <Event
                eventList={generateUpdatedTimes(utcDate, teamEvents)}
                eventColumns={eventColumns}
            />
        </Flex>
    );
};

export default EventList;
