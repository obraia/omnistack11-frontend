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
        flex-direction: column;
        width: 100%;

        img{
            width: 80%;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 15px;
    border-radius: 5px;

    @media (max-width: 420px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 18px;
    text-transform: uppercase;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Link = styled.a`
    margin-top: 15px;
    font-size: 16px;
    color: ${props => props.theme.colors.primary};

    &:hover{
        color: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    }
`;