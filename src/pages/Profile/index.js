import React, { useState, useEffect, useContext } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../assets/logo-sm';

import {
    Container,
    Header,
    Logo,
    UserInfo,
    Title,
    ButtonAdd,
    ButtonLogout,
    List,
    ButtonDelete,
    Incident,
    IncidentTitle,
    IncidentDrescription,
    IncidentValue,

} from './styles';

function Profile() {

    const history = useHistory();

    const { colors } = useContext(ThemeContext);

    const [incidents, setIncidents] = useState([]);

    const [name, setName] = useState('');
    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        (async function () {
            await setName(localStorage.getItem('name'));

            const config = {
                headers: {
                    Authorization: userId
                }
            }

            const response = await api.get('/profile', config);

            console.log(response.data);
            setIncidents(response.data);
        })();
    }, [userId]);

    function handleLogout(){
        localStorage.removeItem('name');
        localStorage.removeItem('user_id');
        history.push('/');
    }

    async function handleDeleteIncident(id) {
        
        const config = {
            headers: {
                Authorization: userId
            }
        }

        try {
            const response = await api.delete(`incidents/${id}`, config);

            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Container>
            <Header>
                <Logo>
                    <LogoImg colorPrimary={colors.primary} colorSecondary={colors.textBackground} />
                </Logo>

                <UserInfo>Seja bem vindo: {name}</UserInfo>

                <ButtonAdd onClick={() => history.push('/profile/new-incident')}>
                    <i>Adicionar caso</i><FontAwesomeIcon icon={faPlus} />
                </ButtonAdd>
                <ButtonLogout onClick={handleLogout}>
                    <FontAwesomeIcon icon={faPowerOff}/>
                </ButtonLogout>
            </Header>

            <Title>Casos cadastrados</Title>

            <List>

                {incidents.map(i => (
                    <Incident key={i.id}>
                        <ButtonDelete onClick={() => handleDeleteIncident(i.id)}><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                        <IncidentTitle>
                            {i.title}
                        </IncidentTitle>
                        <IncidentDrescription>
                            {i.description}
                        </IncidentDrescription>
                        <IncidentValue>
                            Valor: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(i.value)}
                        </IncidentValue>
                    </Incident>
                ))}

            </List>
        </Container>
    );

}

export default Profile;