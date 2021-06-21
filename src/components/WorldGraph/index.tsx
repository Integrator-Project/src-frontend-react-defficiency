import React from 'react';

import DoughnutChart from '../Graphics/DoughnutChart';
import getVaccinationData from '../../utils/getVaccinationData';

import { Container, Header, Title, ConfigWrapper, HelpIcon } from './styles';

const WorldGraph: React.FC = () => {
    const data = getVaccinationData();

    return (
        <Container>
            <Header>
                <Title>Aplicação das vacinas no mundo</Title>
                <ConfigWrapper>
                    <HelpIcon />
                </ConfigWrapper>
            </Header>
            <DoughnutChart />
        </Container>
    );
}

export default WorldGraph;