import { Flex, Input } from "antd";
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
                <div className="event__name-container">
                    <Input allowClear placeholder="Enter your event name" />
                </div>
                <DatePicker allowClear showTime onOk={onOk} />
            </Flex>
        </EventCreatorSyled>
    );
};

export default EventCreator;
