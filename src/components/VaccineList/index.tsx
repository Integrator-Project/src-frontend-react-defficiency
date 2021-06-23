import React from 'react';
import { Vaccine } from '../../models/vaccine.model';

import VaccineItem from '../VaccineItem';

import { Container, Header, Title, List } from './styles';

interface VaccineListProps {
    vaccines?: Vaccine[]
}

const VaccineList: React.FC<VaccineListProps> = ({
    vaccines
}) => {
    return (
        <Container>
            <Header>
                <Title>Vacinas aplicadas no País</Title>
            </Header>
            <List>
                {
                    vaccines?.map(vaccine => {
                        return (
                        <VaccineItem
                            key={vaccine.id}
                            vaccine={vaccine}
                        />
                        );
                    })
                }
            </List>
        </Container>
    );
}

export default VaccineList;