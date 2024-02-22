import { Flex } from "antd";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { EventCreatorSyled } from "./EventCreatorStyled";

const EventCreator = (): JSX.Element => {
    const onOk = (value: DatePickerProps["value"]) => {
        console.log("onOk: ", value);
    };

    return (
        <EventCreatorSyled>
            <Flex justify="flex-start" wrap="wrap" gap="large" align="start">
                <DatePicker allowClear showTime onOk={onOk} />
            </Flex>
        </EventCreatorSyled>
    );
};

export default EventCreator;
