import { Card, Table, TableProps } from "antd";
import {
    TeamEvent,
    EventColumns,
    CustomEventColumns,
} from "../../types/events";
import moment from "moment-timezone";
import { timeDifference } from "../../utils/timeFunctions";

interface EventProps {
    eventList: TeamEvent[];
    eventColumns:
        | EventColumns[]
        | CustomEventColumns[]
        | TableProps<EventColumns>["columns"];
    eventsGroup: string;
}

const Event = ({
    eventList,
    eventColumns,
    eventsGroup,
}: EventProps): JSX.Element => {
    const eventLocalTimes = eventList.map((event) => {
        const eventTime = moment.utc(event.serverTime);
        const userTime = moment.now();
        const difference = eventTime.diff(userTime, "m");
        return {
            ...event,
            localTime: moment
                .utc(event.localTime)
                .local(true)
                .format("DD/MM - HH:mm"),
            localTimeLeft:
                difference < 360
                    ? timeDifference(difference)
                    : moment.duration(timeDifference(difference)).humanize(),
        };
    });

    return (
        <Card size="default" title={eventsGroup} bordered={false}>
            <Table
                pagination={false}
                dataSource={eventLocalTimes}
                columns={eventColumns as EventColumns[]}
            />
        </Card>
    );
};

export default Event;
