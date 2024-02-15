import styled from "styled-components";

export const LocalTimeStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 600px) {
        justify-content: center;
    }
    .local-time {
        display: flex;
        align-items: center;
        gap: 1em;
        height: 2em;
        max-width: 200px;
        color: black;
        padding: 0 1em;
        background-color: white;
        border-radius: 0.2em;
        font-weight: 700;

        &__digits {
            color: #167420;
        }
    }
`;
