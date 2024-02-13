import { useEffect, useState } from "react";
import { LocalTimeStyled } from "./LocalTimeStyled";

const LocalTime = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const localUserTime = new Date().toLocaleTimeString(getUserLocale(), {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setCurrentTime(localUserTime);
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 1000);

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
      <div className="local-time">
        Your local time:{" "}
        <span className="local-time__digits">{currentTime}</span>
      </div>
    </LocalTimeStyled>
  );
};

export default LocalTime;
