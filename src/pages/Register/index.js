import React, { useState, useRef, useContext } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Input, Button } from '../../styles/global';
import { Container, LeftContainer, Form, Title, InputGroup } from './styles';

import logo from '../../assets/logo.svg';

function Register() {

    const history = useHistory();

    const { colors } = useContext(ThemeContext);

    const name = useRef('');
    const id = useRef('');
    const password = useRef('');
    const city = useRef('');
    const uf = useRef('');
    const email = useRef('');
    const whatsapp = useRef('');

    async function handleSubmit(event) {
        event.preventDefault();

        const user = {
            name: name.current.value,
            id: id.current.value,
            password: password.current.value,
            adress: {
                city: city.current.value,
                uf: uf.current.value,
            },
            contact: {
                email: email.current.value,
                whatsapp: whatsapp.current.value,
            },
        }

        const response = await api.post('/users', user).catch(err => { console.log(err)});

        history.push('/');
        
        console.log(response);
    }

    return (
        <Container>

            <LeftContainer>
                <img src={logo} />
                <p>Faça cadastro para aproveitar todas as funcionalidades do sistema Be The Hope.
                    E com isso fazer parte dessa incrível comunidade.</p>
                <Link to={'/'}><FontAwesomeIcon icon={faArrowLeft} /> Já tem uma conta? Fazer logon.</Link>
            </LeftContainer>


            <Form onSubmit={handleSubmit}>
                <Title>Crie sua conta</Title>
                <Input
                    ref={name}
                    placeholder={'Nome completo'} />
                <Input
                    ref={id}
                    placeholder={'CPF'} />
                <Input
                    ref={password}
                    placeholder='Senha' type='password' />
                <Input
                    ref={email}
                    placeholder={'E-mail'} />
                <Input
                    ref={whatsapp}
                    placeholder={'Whatsapp'} />

                <InputGroup>
                    <Input
                        ref={city}
                        placeholder={'Cidade'} />
                    <Input
                        ref={uf}
                        placeholder={'UF'} style={{ flexShrink: 5, marginLeft: 10 }} />
                </InputGroup>

                <Button>Cadastrar</Button>
            </Form>

        </Container>
    );

}

export default Register;