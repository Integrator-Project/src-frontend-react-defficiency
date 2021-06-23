import React from 'react';
 
import WorldGraph from '../WorldGraph';
import CountriesList from '../CountriesList';

import { Container } from './styles';
import { VaccinationData } from '../../request/vaccination-data';

const CountriesContainer: React.FC<VaccinationData> = (vaccinationData) => {
    return (
        <Container>
            <WorldGraph 
                population={vaccinationData.population}
                percentage_second_dose={vaccinationData.percentage_second_dose}
                percentage_first_dose={vaccinationData.percentage_first_dose}
                total_vaccination={vaccinationData.total_vaccination}
                people_vaccinated={vaccinationData.people_vaccinated}
                people_fully_vaccinated={vaccinationData.people_fully_vaccinated}
            />
            <CountriesList />
        </Container>
    );
};

export default CountriesContainer;