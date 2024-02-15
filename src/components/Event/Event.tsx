import { Card, Table } from "antd";
import { Event as EventType, EventColumns } from "../../types/events";

interface EventProps {
    eventList: EventType[];
    eventColumns: EventColumns[];
}

const Event = ({ eventList, eventColumns }: EventProps): JSX.Element => {
    return (
        <Card
            size="default"
            title="Main events"
            bordered={false}
            style={{
                width: 400,
                minHeight: 600,
            }}
        >
            <Table
                pagination={false}
                dataSource={eventList}
                columns={eventColumns}
            />
        </Card>
    );
};

export default Event;
