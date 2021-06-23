import React from 'react';

import DoughnutChart from '../Graphics/DoughnutChart';

import { Container, Header, Title, ConfigWrapper, DoseSelect, ChartWrapper } from './styles';

interface WorldGraphProps {
    population: number,
    percentage_second_dose: number,
    percentage_first_dose: number,
    total_vaccination: number,
    people_vaccinated: number,
    people_fully_vaccinated: number
}

const WorldGraph: React.FC<WorldGraphProps> = ({
    population=0,
    percentage_second_dose=0,
    percentage_first_dose=0,
    total_vaccination=0,
    people_vaccinated=0,
    people_fully_vaccinated=0
}) => {
    return (
        <Container>
            <Header>
                <Title>Aplicação das vacinas no mundo</Title>
                <ConfigWrapper>
                    <DoseSelect>
                        <option>1º dose</option>
                        <option>2º dose</option>
                    </DoseSelect>
                </ConfigWrapper>
            </Header>
            <ChartWrapper>
                <DoughnutChart data={[population, total_vaccination]} />
                <div>
                    <h3>População vacinada</h3>
                    <span>{percentage_first_dose.toFixed(2)}%</span>
                </div>
            </ChartWrapper>
        </Container>
    );
}

export default WorldGraph;