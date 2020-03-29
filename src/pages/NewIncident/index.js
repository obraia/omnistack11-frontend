import React, { useState, useRef } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Input, InputBox, Button } from '../../styles/global';
import { Container, Form, LeftContainer } from './styles';

import logo from '../../assets/logo.svg';

function NewIncident() {
    const history = useHistory();

    const userId = localStorage.getItem('user_id');

    const title = useRef('');
    const description = useRef('');
    const value = useRef(0);

    

    async function handleSubmit(event){
        event.preventDefault();

        const config = {
            headers: {
                Authorization: userId,
            }
        }

        const incident = {
            title: title.current.value,
            description: description.current.value,
            value: value.current.value,
        }

        try{
            const response = await api.post('/incidents', incident, config);
            history.push('/profile');

        }catch(err){
            console.log(err);
        }
    }

    return (
        <Container>

            <LeftContainer>
                <img src={logo} />
                <p>Preencha os campos para adionar um novo caso. Faça uma boa descrição,
                para que tenha mais chances de encontrar alguém disposta a te ajudar.</p>
                <Link to={'/profile'}> <FontAwesomeIcon icon={faArrowLeft} /> Voltar para a home</Link>
            </LeftContainer>

            <Form onSubmit={handleSubmit}>
                <Input placeholder='Titulo do caso' ref={title}/>
                <InputBox placeholder='Descrição do caso' ref={description}/>
                <Input placeholder='Valor' ref={value}/>
                <Button>Adicionar</Button>
            </Form>

        </Container>
    );

}

export default NewIncident;