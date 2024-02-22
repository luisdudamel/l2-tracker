import LocalTime from "../LocalTime/LocalTime";
import { HeaderStyled, SubtitleStyled, TitleStyled } from "./HeaderStyled";

interface HeaderProps {
    localTime: string;
}

const Header = ({ localTime }: HeaderProps): JSX.Element => {
    return (
        <HeaderStyled>
            <div className="header-container">
                <div className="header-title__container">
                    <TitleStyled>Reborn Eternal IL</TitleStyled>
                    <SubtitleStyled>TIME TRACKER</SubtitleStyled>
                </div>
                <LocalTime localTime={localTime} />
            </div>
        </HeaderStyled>
    );
};

export default Header;
