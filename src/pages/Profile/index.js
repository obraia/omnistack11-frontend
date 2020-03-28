import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../assets/logo-sm';

import {
    Container,
    Header,
    Logo,
    Title,
    ButtonAdd,
    List,
    ButtonDelete,
    Incident,
    IncidentTitle,
    IncidentDrescription,
    IncidentValue,

} from './styles';

function Profile() {

    const { colors } = useContext(ThemeContext);

    return (
        <Container>
            <Header>
                <Logo>
                    <LogoImg colorPrimary={colors.primary} colorSecondary={colors.textBackground} />
                </Logo>

                <ButtonAdd>
                    <Link to={'/profile/new-incident'}>
                        <i>Adicionar caso</i><FontAwesomeIcon icon={faPlus} />
                    </Link>      
                </ButtonAdd>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faPowerOff} size='2x' />
                </Link>
            </Header>

            <Title>Casos cadastrados</Title>

            <List>
                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 1
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 2
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 3
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 4
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 1
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 2
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 3
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

                <Incident>
                    <ButtonDelete><FontAwesomeIcon icon={faTrashAlt} /></ButtonDelete>
                    <IncidentTitle>
                        Titulo do Caso 4
                    </IncidentTitle>
                    <IncidentDrescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus
                        hendrerit tellus, vitae sollicitudin elit euismod vel. Curabitur vitae
                        turpis sapien. Maecenas eu nibh elit. Cras convallis porta consectetur.
                    </IncidentDrescription>
                    <IncidentValue>
                        Valor: R$ 200,00
                    </IncidentValue>
                </Incident>

            </List>
        </Container>
    );

}

export default Profile;