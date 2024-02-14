import { useEffect, useState } from "react";
import { LocalTimeStyled } from "./LocalTimeStyled";

const LocalTime = () => {
    const [currentTime, setCurrentTime] = useState<string>("");

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

            setCurrentTime(localUserTime);
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
        <LocalTimeStyled>
            <p className="local-time">
                Your local time:{" "}
                <span className="local-time__digits">{currentTime}</span>
            </p>
        </LocalTimeStyled>
    );
};

export default LocalTime;
