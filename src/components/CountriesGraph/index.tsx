import React from 'react';

import LineChart from '../Graphics/LineChart';
import getVaccinationData from '../../utils/getVaccinationData';

import { Container, Header, Title, ConfigWrapper, HelpIcon } from './styles';

const ConutriesGraph: React.FC = () => {
    const data = getVaccinationData();

    return (
        <Container>
            <Header>
                <Title>Impacto da vacinação</Title>
                <ConfigWrapper>
                    <HelpIcon />
                </ConfigWrapper>
            </Header>
            <LineChart
                data={data}
                title='Total de vacinas por dia no mundo'
                color="#3E517A"
            />
        </Container>
    );
}

export default ConutriesGraph;