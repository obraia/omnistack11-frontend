import styled, { createGlobalStyle } from 'styled-components';
import { lighten, shade } from "polished";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font: 400 14px Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.textBackground};
    }

    button, a{
        cursor: pointer;
        text-decoration: none;
        background: none;
        border: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: none;
        -webkit-text-fill-color: ${props => props.theme.colors.textBackground};
        -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.secondary} inset;
        transition: background-color 5000s ease-in-out 0s;
    }
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

export const InputBox = styled.textarea`
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
    resize: none;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
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