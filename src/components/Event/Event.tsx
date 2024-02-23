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
        let localTimeLeft;
        if (difference > 0 && difference < 360) {
            localTimeLeft = timeDifference(difference);
        } else if (difference < 0) {
            localTimeLeft = "Time passed";
        } else {
            localTimeLeft = moment
                .duration(timeDifference(difference))
                .humanize();
        }
        return {
            ...event,
            localTime: moment
                .utc(event.localTime)
                .local(true)
                .format("DD/MM - HH:mm"),
            localTimeLeft: localTimeLeft,
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
