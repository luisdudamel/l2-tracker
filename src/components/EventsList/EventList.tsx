import { Flex } from "antd";
import Event from "../Event/Event";

const EventList = (): JSX.Element => {
    return (
        <Flex justify="space-evenly" wrap="wrap" gap="large" align="center">
            <Event />
            <Event />

            <Event />
        </Flex>
    );
};

export default EventList;
