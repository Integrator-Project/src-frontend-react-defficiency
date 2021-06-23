import React from 'react';
import { Vaccine } from '../../models/vaccine.model';
 
import CountriesGraph from '../CountriesGraph';
import VaccineList from '../VaccineList';

import { Container } from './styles';

interface CountryAnalysisContainerProps {
    vaccines?: Vaccine[];
    vaccination_started?: string;
    country_name?: string
}

const CountryAnalysisContainer: React.FC<CountryAnalysisContainerProps> = ({
    vaccines,
    vaccination_started,
    country_name
}) => {
    return (
        <Container>
            <CountriesGraph vaccination_started={vaccination_started} country_name={country_name}/>
            <VaccineList vaccines={vaccines} />
        </Container>
    );
};

export default CountryAnalysisContainer;