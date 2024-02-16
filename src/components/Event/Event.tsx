import { Card, Table } from "antd";
import { Event as EventType, EventColumns } from "../../types/events";
import moment from "moment-timezone";
import { timeDifference } from "../../utils/timeFunctions";

interface EventProps {
    eventList: EventType[];
    eventColumns: EventColumns[];
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
            localTime: moment.utc(event.localTime).local(true).format("HH:mm"),
            localTimeLeft: timeDifference(difference),
        };
    });

    return (
        <Card
            size="default"
            title={eventsGroup}
            bordered={false}
            style={{
                width: 400,
                minHeight: 600,
            }}
        >
            <Table
                pagination={false}
                dataSource={eventLocalTimes}
                columns={eventColumns}
            />
        </Card>
    );
};

export default Event;
