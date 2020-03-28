import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div`
    height: 40px;
    width: 40px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: absolute;
    right: 0;
    top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    
    opacity: 25%;
    transition: 0.5s;

    &:hover{
        transition: 0.5s;
        opacity: 100%;
    }
`;

export const ButtonLight = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    border: none;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textBackground};
`;