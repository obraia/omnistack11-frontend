import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import {Input, Button } from '../../styles/global';
import { Container, LeftContainer, Form, Title, InputGroup } from './styles';

import logo from '../../assets/logo.svg';

function Register() {

    const { colors } = useContext(ThemeContext);

    return (
        <Container>

            <LeftContainer>
                <img src={logo}/>
                <p>Faça cadastro para aproveitar todas as funcionalidades do sistema Be The Hope.
                    E com isso fazer parte dessa incrível comunidade.</p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /> Já tem uma conta? Fazer logon.</Link>
            </LeftContainer>


            <Form>
                <Title>Crie sua conta</Title>
                <Input placeholder={'Nome completo'} />
                <Input placeholder={'CPF'} />
                <Input placeholder='Senha' type='password' />
                <Input placeholder={'E-mail'} />
                <Input placeholder={'Whatsapp'} />

                <InputGroup>
                    <Input placeholder={'Cidade'} />
                    <Input placeholder={'UF'} style={{flexShrink: 5, marginLeft: 10}}/>
                </InputGroup>

                <Button>Cadastrar</Button>
            </Form>

        </Container>
    );

}

export default Register;