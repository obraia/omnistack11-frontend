import React, { useState, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { Container, ButtonLight } from './styles';

function ButtonTheme({ toggleTheme }) {

    const { title } = useContext(ThemeContext);

    return (
        <Container>
            <ButtonLight onClick={toggleTheme}>
                {title === 'light' ? <FontAwesomeIcon icon={faSun} /> :
                    <FontAwesomeIcon icon={faMoon} />}

            </ButtonLight>
        </Container>
    );

}

export default ButtonTheme;