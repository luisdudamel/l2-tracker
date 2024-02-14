import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    background-color: black;
    border-radius: 0 0 12px 12px;
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
    height: 150px;
    @media (max-width: 600px) {
        flex-direction: column;
        height: 15em;
        gap: 20px;
        justify-content: center;
    }

    .header {
        &-title {
            &__container {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;

                @media (max-width: 600px) {
                    align-items: center;
                }
            }
        }
    }
`;

export const TitleStyled = styled.h1`
    display: flex;
    color: white;
    height: 100%;
    font-size: 3rem;
    top: -0.7em;
    margin: 0;
`;

export const SubtitleStyled = styled.h2`
    color: white;
    top: 3em;
    margin: 0;
    height: 100%;
`;
