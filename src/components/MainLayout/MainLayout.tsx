import { Flex } from "antd";
import Header from "../Header/Header";
import EventList from "../EventsList/EventList";
import { useEffect, useState } from "react";
import { updateEpicEventsDates } from "../../utils/timeFunctions";
import { epicBosses } from "../EventsList/events";
import EventCreator from "../EventCreator/EventCreator";
import { StyledLayout } from "./StyledLayout";
import { UserCustomEvent } from "../../types/events";

const MainLayout = (): JSX.Element => {
    const [customEvents, setCustomEvents] = useState<UserCustomEvent[]>([]);
    const [currentTime, setLocalTime] = useState<string>("");

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

        epicBosses.forEach((event) => updateEpicEventsDates(event));

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const storedCustomEvents = JSON.parse(
            localStorage.getItem("customEvents") || "[]"
        ) as UserCustomEvent[];

        setCustomEvents(storedCustomEvents);
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
            <StyledLayout>
                <Header localTime={currentTime} />
                <div className="content-container">
                    <EventCreator
                        setCurrentCustomEvents={setCustomEvents}
                        currentCustomEvents={customEvents}
                    />
                    <EventList />
                </div>
            </StyledLayout>
        </Flex>
    );
};

export default MainLayout;
