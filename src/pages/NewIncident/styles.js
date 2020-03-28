import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: auto;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Form = styled.form`
    width: 500px;
    padding: 15px;
    border-radius: 5px;

    @media (max-width: 420px) {
        width: 100%;
    }
`;

export const LeftContainer = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    font-size: 16px;

    p{
        text-align: center;
    }

    a{
        margin-top: 15px;
        font-size: 16px;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};

        &:hover{
            color: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
        }
    }

    @media (max-width: 420px) {

        img{
            width: 80%;
        }
    }
`;