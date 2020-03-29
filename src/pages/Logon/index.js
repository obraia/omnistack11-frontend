import React, { useState, useRef, useContext } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.svg';

import { Container, Form, Title } from './styles';
import { Input, Button } from '../../styles/global';

function Logon() {

    const history = useHistory();

    const { colors } = useContext(ThemeContext);

    const id = useRef('');
    const password = useRef('');

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            id: id.current.value,
            password: password.current.value,
        }
        
        try{
            const response = await api.post('/sessions', data);
            localStorage.setItem('user_id', id.current.value);
            localStorage.setItem('name', response.data.name);
            history.push('/profile');
        }
        catch(err){
            console.log(err);
            console.log('Falha no login');
        }
    
    }

    return (
        <Container>
            <img src={logo} />
            <Form onSubmit={handleSubmit}>
                <Title>Entre com sua conta</Title>
                <Input placeholder={'Seu CPF'} ref={id} />
                <Input placeholder='Sua senha' type='password' ref={password} />
                <Button>Entrar</Button>
                <Link to={'/register'}><FontAwesomeIcon icon={faSignOutAlt} /> Criar uma conta</Link>
            </Form>
        </Container>
    );

}

export default Logon;