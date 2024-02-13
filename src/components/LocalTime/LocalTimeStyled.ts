import styled from "styled-components";

export const LocalTimeStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;

  .local-time {
    display: flex;
    align-items: center;
    gap: 1em;
    height: 2em;
    width: 50%;
    color: black;
    padding-left: 1em;
    background-color: white;
    border-radius: 0.2em;
    font-weight: 700;

    &__digits {
      color: #167420;
    }
  }
`;
