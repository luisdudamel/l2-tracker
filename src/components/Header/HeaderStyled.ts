import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    width: 100%;
    background-color: black;
    border-radius: 0 0 12px 12px;
    padding-top: 2em;
    padding-left: 10em;
    padding-right: 10em;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
        height: 20em;
        gap: 20px;
        justify-content: center;
        padding: 0 1em;
    }

    .header {
        &-title {
            &__container {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;

                @media (max-width: 800px) {
                    align-items: center;
                    flex-direction: column;
                }
            }
        }
        &-container {
            width: 100%;
            max-width: 1600px;
            display: flex;
            @media (max-width: 800px) {
                flex-direction: column;
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

    @media (max-width: 800px) {
        font-size: 2rem;
    }
`;

export const SubtitleStyled = styled.h2`
    color: white;
    top: 3em;
    margin: 0;
    height: 100%;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`;
