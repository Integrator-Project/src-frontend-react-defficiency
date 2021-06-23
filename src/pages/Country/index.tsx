import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import { Grid } from './styles';

import Header from '../../components/Header';
import GeneralDataContainer  from '../../components/GeneralDataContainer';
import CountryAnalysisContainer from '../../components/CountryAnalysisContainer';
import { CountryService } from '../../services/country.service';
import { GetAllCountryData } from '../../request/get-all-country-data';

interface ParamProps {
    country: string
}

const Country: React.FC = () => {
    const params = useParams<ParamProps>();
    const history = useHistory();

    const [data, setData] = useState<GetAllCountryData>()

    useEffect(() => {
        async function getAllData() {
            const service = new CountryService();
            
            service.GetAllCountryData(params.country).then(data => {
                if(data.country.name === 'Earth') 
                    history.push('/');
                else
                    setData(data);
            });
        }

        getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid>
            <Header country={data?.country}/>
            <GeneralDataContainer 
                vacines={data?.vaccination.total_vaccination} 
                cases={data?.daily.confirmed.value}
                deaths={data?.daily.death.value}
            />
            <CountryAnalysisContainer 
                vaccines={data?.vaccination.vaccines}
                vaccination_started={data?.vaccination.started}
                country_name={data?.country.name}
            />
        </Grid>
    );
};

export default Country;