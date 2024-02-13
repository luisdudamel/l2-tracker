import { HeaderStyled, SubtitleStyled, TitleStyled } from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="header-title__container">
        <TitleStyled>Lineage 2</TitleStyled>
        <SubtitleStyled>TIME TRACKER</SubtitleStyled>
      </div>
    </HeaderStyled>
  );
};

export default Header;
