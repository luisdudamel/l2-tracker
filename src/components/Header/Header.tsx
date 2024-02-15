import LocalTime from "../LocalTime/LocalTime";
import { HeaderStyled, SubtitleStyled, TitleStyled } from "./HeaderStyled";

interface HeaderProps {
    localTime: string;
}

const Header = ({ localTime }: HeaderProps): JSX.Element => {
    return (
        <HeaderStyled>
            <div className="header-title__container">
                <TitleStyled>Lineage 2</TitleStyled>
                <SubtitleStyled>TIME TRACKER</SubtitleStyled>
            </div>
            <LocalTime localTime={localTime} />
        </HeaderStyled>
    );
};

export default Header;
