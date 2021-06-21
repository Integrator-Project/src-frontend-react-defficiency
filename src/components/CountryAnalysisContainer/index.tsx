import React from 'react';
 
import CountriesGraph from '../CountriesGraph';
import VaccineList from '../VaccineList';

import { Container } from './styles';

const CountryAnalysisContainer: React.FC = () => {
    return (
        <Container>
            <CountriesGraph />
            <VaccineList />
        </Container>
    );
};

export default CountryAnalysisContainer;