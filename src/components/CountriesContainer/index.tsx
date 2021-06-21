import React from 'react';
 
import WorldGraph from '../WorldGraph';
import CountriesList from '../CountriesList';

import { Container } from './styles';

const CountriesContainer: React.FC = () => {
    return (
        <Container>
            <WorldGraph />
            <CountriesList />
        </Container>
    );
};

export default CountriesContainer;