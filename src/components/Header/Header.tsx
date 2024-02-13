import LocalTime from "../LocalTime/LocalTime";
import { HeaderStyled, SubtitleStyled, TitleStyled } from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="header-title__container">
        <TitleStyled>Lineage 2</TitleStyled>
        <SubtitleStyled>TIME TRACKER</SubtitleStyled>
      </div>
      <LocalTime />
    </HeaderStyled>
  );
};

export default Header;
