import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  height: 10rem;
  background-color: black;
  border-radius: 0 0 12px 12px;
  padding: 2em;

  .header {
    &-title {
      &__container {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
  }
`;

export const TitleStyled = styled.h1`
  display: flex;
  color: white;
  height: 0px;
  font-size: 4rem;
  position: absolute;
  top: -0.7em;
`;

export const SubtitleStyled = styled.h2`
  color: white;
  position: absolute;
  top: 3em;
`;
