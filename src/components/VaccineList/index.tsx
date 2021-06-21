import React from 'react';

import VaccineItem from '../VaccineItem';

import { Container, Header, Title, List } from './styles';

const VaccineList: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Vacinas aplicadas no País</Title>
            </Header>
            <List>
                <VaccineItem 
                    name='Coronavac'
                    producer="Sinovac"/>
                <VaccineItem 
                    name='Coronavac'
                    producer="Sinovac"/>
                <VaccineItem 
                    name='Coronavac'
                    producer="Sinovac"/>
            </List>
        </Container>
    );
}

export default VaccineList;