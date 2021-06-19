import React from 'react';
 
import VaccinationsCard from '../VaccinationsCard';
import CasesCard from '../CasesCard'; 
import DeathsCard from '../DeathsCard';

import { Container } from './styles';

const TopCountriesContainer: React.FC = () => {
    return (
        <Container>
            <VaccinationsCard title="Vacinas aplicadas" amount={2000000000} improving/>
            <CasesCard title="Casos covid-19" amount={21365657} improving={false}/>
            <DeathsCard title="Mortes covid-19" amount={213214} improving={false}/>
        </Container>
    );
};

export default TopCountriesContainer;