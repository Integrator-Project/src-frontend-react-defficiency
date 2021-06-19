import React from 'react';
 
import TopCountriesGraph from '../TopCountriesGraph';
import TopCountriesList from '../TopCountriesList';

import { Container } from './styles';

const TopCountriesContainer: React.FC = () => {
    return (
        <Container>
            <TopCountriesGraph />
            <TopCountriesList />
        </Container>
    );
};

export default TopCountriesContainer;