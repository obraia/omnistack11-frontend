import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: auto;

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

export const Form = styled.form`
    width: 400px;
    padding: 15px;
    border-radius: 5px;

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 18px;
    text-transform: uppercase;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    text-indent: 15px;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textBackground};

    &:focus{
        background-color: ${props => props.theme.colors.secondary && lighten(0.05, props.theme.colors.secondary)};
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;
    text-transform: uppercase;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 15px;
    margin-bottom: 15px;

    &:hover{
        background-color: ${props => props.theme.colors.primary && lighten(0.05, props.theme.colors.primary)};
    }
`;

export const Link = styled.a`
    margin-top: 15px;
    font-size: 16px;
    color: ${props => props.theme.colors.primary};

    &:hover{
        color: ${props => props.theme.colors.primary && lighten(0.15, props.theme.colors.primary)};
    }
`;