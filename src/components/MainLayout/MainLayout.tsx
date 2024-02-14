import { Flex, Layout } from "antd";
import Header from "../Header/Header";
import EventList from "../EventsList/EventList";
const { Content } = Layout;

const layoutStyle: React.CSSProperties = {
    backgroundColor: "#305768",
    height: "100vh",
};

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 100,
    lineHeight: "120px",
    color: "#fff",
    fontSize: "120px",
    backgroundColor: "#305768",
};

const MainLayout = (): JSX.Element => {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <Header />
                <Content style={contentStyle}>
                    <EventList />
                </Content>
            </Layout>
        </Flex>
    );
};

export default MainLayout;
