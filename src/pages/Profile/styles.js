import styled from "styled-components";
import { lighten, shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    background-color: ${props => props.theme.colors.background && lighten(0.03, props.theme.colors.background)};

    a{     
        color: ${props => props.theme.colors.textBackground};

        &:hover{
            color: ${props => props.theme.colors.textBackground && lighten(0.15, props.theme.colors.textBackground)};
        }
    }
`;

export const Logo = styled.div`
    margin-right: auto;
`;

export const ButtonAdd = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin-right: 15px;
    background-color: ${props => props.theme.colors.primary};
    
    &:hover{
        background-color: ${props => props.theme.colors.primary && lighten(0.05, props.theme.colors.primary)};
    }

    a{
        padding: 10px;
        color: ${props => props.theme.colors.textPrimary};

        &:hover{
            color: ${props => props.theme.colors.textPrimary};
        }
    }

    i{
        font-style: normal;
        margin-right: 5px;
    }

    @media (max-width: 420px) {
        i{
            display: none;
        }
    }
`;

export const Title = styled.div`
    margin: 25px;
    font-size: 26px;
    font-weight: bold;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    width: 100%;
`;

export const Incident = styled.li`
    position: relative;
    width: 480px;
    padding: 25px;
    border-radius: 5px;
    margin: 15px;
    background-color: ${props => props.theme.colors.background && lighten(0.05, props.theme.colors.background)};
    box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
`;

export const ButtonDelete = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 18px;

    color: ${props => props.theme.colors.textBackground};

    &:hover{
       color: ${props => props.theme.colors.textBackground && lighten(0.25, props.theme.colors.textBackground)};
    }
`;

export const IncidentTitle = styled.div`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const IncidentDrescription = styled.div`
    text-align: justify;
`;

export const IncidentValue = styled.div`
    width: fit-content;
    margin-top: 15px;
    margin-left: auto;
    margin-right: -25px;
    padding: 5px;

    font-size: 18px;
    border-left-width: 4px;
    border-left-style: solid;
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.background && lighten(0.03, props.theme.colors.background)};

`;