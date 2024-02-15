import { Flex } from "antd";
import Event from "../Event/Event";
import { epicBosses, eventColumns, teamEvents } from "./events";

const EventList = (): JSX.Element => {
    return (
        <Flex justify="space-evenly" wrap="wrap" gap="large" align="center">
            <Event eventList={epicBosses} eventColumns={eventColumns} />
            <Event eventList={epicBosses} eventColumns={eventColumns} />
            <Event eventList={teamEvents} eventColumns={eventColumns} />
        </Flex>
    );
};

export default EventList;
