import React from 'react';

import { Grid } from './styles';

import Header from '../../components/Header';
import GeneralDataContainer  from '../../components/GeneralDataContainer';
import CountriesContainer from '../../components/CountriesContainer';
import { useEffect } from 'react';
import { CountryService } from '../../services/country.service';
import { useState } from 'react';
import { GetAllCountryData } from '../../request/get-all-country-data';
import { VaccinationData } from '../../request/vaccination-data';

const Landing: React.FC = () => {
    const [data, setData] = useState<GetAllCountryData>()

    const [vaccinationData, setVaccinationData] = useState<VaccinationData>({
        population: 0,
        percentage_second_dose: 0,
        percentage_first_dose: 0,
        total_vaccination: 0,
        people_vaccinated: 0,
        people_fully_vaccinated: 0
    });

    async function getAllData() {
        const service = new CountryService();
        await service.GetAllCountryData().then(data => {
            setData(data);
            setVaccinationData({
                population: data.country.population,
                percentage_second_dose: data.vaccination.percentage_second_dose,
                percentage_first_dose: data.vaccination.percentage_first_dose,
                total_vaccination: data.vaccination.total_vaccination,
                people_vaccinated: data.vaccination.people_vaccinated,
                people_fully_vaccinated: data.vaccination.people_fully_vaccinated
            })
        });
    }

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <Grid>
            <Header />
            <GeneralDataContainer 
                vacines={data?.vaccination.total_vaccination} 
                cases={data?.daily.confirmed.value}
                deaths={data?.daily.death.value}
            />
            <CountriesContainer  
                population={vaccinationData.population}
                percentage_second_dose={vaccinationData.percentage_second_dose}
                percentage_first_dose={vaccinationData.percentage_first_dose}
                total_vaccination={vaccinationData.total_vaccination}
                people_vaccinated={vaccinationData.people_vaccinated}
                people_fully_vaccinated={vaccinationData.people_fully_vaccinated}
            />
        </Grid>
    );
};

export default Landing;