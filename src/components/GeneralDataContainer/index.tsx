import React from 'react';
 
import VaccinationsCard from '../VaccinationsCard';
import CasesCard from '../CasesCard'; 
import DeathsCard from '../DeathsCard';

import { Container } from './styles';

interface GeneralDataContainerProps {
    vacines?: number;
    cases?: number;
    deaths?: number;
}

const GeneralDataContainer: React.FC<GeneralDataContainerProps> = ({
    vacines=0,
    cases=0,
    deaths=0
}) => {
    return (
        <Container>
            <VaccinationsCard title="Vacinas aplicadas" amount={vacines} improving/>
            <CasesCard title="Casos covid-19" amount={cases} improving={false}/>
            <DeathsCard title="Mortes covid-19" amount={deaths} improving={false}/>
        </Container>
    );
};

export default GeneralDataContainer;