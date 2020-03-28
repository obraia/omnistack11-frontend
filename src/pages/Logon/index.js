import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.svg';

import { Container, Form, Title } from './styles';
import {Input, Button } from '../../styles/global';

function Logon() {

    const { colors } = useContext(ThemeContext);

    return(
        <Container>
            <img src={logo}/>
            <Form>
                <Title>Entre com sua conta</Title>
                <Input placeholder={'Seu CPF'}/>
                <Input placeholder='Sua senha' type='password'/>
                <Button>Entrar</Button>
                <Link to={'/register'}><FontAwesomeIcon icon={faSignOutAlt}/> Criar uma conta</Link>
            </Form>
        </Container>
    );

}

export default Logon;