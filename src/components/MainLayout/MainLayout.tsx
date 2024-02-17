import { Flex, Layout } from "antd";
import Header from "../Header/Header";
import EventList from "../EventsList/EventList";
import { useEffect, useState } from "react";
import { updateEpicEventsDates } from "../../utils/timeFunctions";
import { epicBosses } from "../EventsList/events";
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
    const [currentTime, setLocalTime] = useState<string>("");

    useEffect(() => {
        epicBosses.forEach((event) => updateEpicEventsDates(event));
    }, []);

    useEffect(() => {
        const updateCurrentTime = () => {
            const localUserTime = new Date().toLocaleTimeString(
                getUserLocale(),
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }
            );
            setLocalTime(localUserTime);
        };

        updateCurrentTime();

        const currentSeconds = new Date().getSeconds();
        const secondsUntilNextMinute = 60 - currentSeconds;

        const intervalId = setInterval(
            updateCurrentTime,
            secondsUntilNextMinute * 1000
        );

        return () => clearInterval(intervalId);
    }, []);

    const getUserLocale = (): string => {
        if (navigator.languages && navigator.languages.length) {
            return navigator.languages[0];
        } else {
            return navigator.language || "en";
        }
    };

    return (
        <Flex gap="middle" wrap="wrap">
            <Layout style={layoutStyle}>
                <Header localTime={currentTime} />
                <Content style={contentStyle}>
                    <EventList />
                </Content>
            </Layout>
        </Flex>
    );
};

export default MainLayout;
