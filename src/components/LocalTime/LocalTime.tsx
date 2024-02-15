import { LocalTimeStyled } from "./LocalTimeStyled";

interface LocalTimeProps {
    localTime: string;
}

const LocalTime = ({ localTime }: LocalTimeProps) => {
    return (
        <LocalTimeStyled>
            <p className="local-time">
                Your local time:{" "}
                <span className="local-time__digits">{localTime}</span>
            </p>
        </LocalTimeStyled>
    );
};

export default LocalTime;
