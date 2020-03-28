import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Input, InputBox, Button } from '../../styles/global';
import { Container, Form, LeftContainer } from './styles';

import logo from '../../assets/logo.svg';

function NewIncident() {

    return (
        <Container>

            <LeftContainer>
                <img src={logo} />
                <p>Preencha os campos para adionar um novo caso. Faça uma boa descrição,
                para que tenha mais chances de encontrar alguém disposta a te ajudar.</p>
                <Link to={'/profile'}> <FontAwesomeIcon icon={faArrowLeft} /> Voltar para a home</Link>
            </LeftContainer>

            <Form>
                <Input placeholder='Titulo do caso' />
                <InputBox placeholder='Descrição do caso' />
                <Input placeholder='Valor' />
                <Button>Adicionar</Button>
            </Form>

        </Container>
    );

}

export default NewIncident;