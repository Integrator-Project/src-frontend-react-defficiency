import React from 'react';

import DoughnutChart from '../Graphics/DoughnutChart';
import getVaccinationData from '../../utils/getVaccinationData';

import { Container, Header, Title, ConfigWrapper, HelpIcon, ChartWrapper } from './styles';

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
            <ChartWrapper>
                <DoughnutChart />
                <div>
                    <h3>População vacinada</h3>
                    <span>23%</span>
                </div>
            </ChartWrapper>
        </Container>
    );
}

export default WorldGraph;