import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DailyDataPerMonth } from '../../request/daily-data-per-month';
import { CountryService } from '../../services/country.service';
import { VaccineApplicationService } from '../../services/vaccine-application.service';

import LineChart from '../Graphics/LineChart';

import { Container, Header, Title, ConfigWrapper, MonthIntervalSelect } from './styles';

interface CountriesGrapgProps {
    vaccination_started?: string;
    country_name?: string;
}

interface GraphData {
    months: string[],
    vaccines: number[],
    cases: number[],
    deaths: number[]
}

interface ParamProps {
    country: string
}

const CountriesGraph: React.FC<CountriesGrapgProps> = ({
    vaccination_started,
    country_name
}) => {
    const params = useParams<ParamProps>();
    const [graphData, setGraphData] = useState<GraphData>({
        months:[],
        cases:[],
        deaths:[],
        vaccines:[]
    })

    async function handleGetDataInterval() {
        const countryService = new CountryService();
        const vaccinationService = new VaccineApplicationService();
        const data = await countryService.GetDailyDataPerMonth(params.country, 5);

        const vaccine_data = await vaccinationService.getTotalPerMountByCountry(params.country, 5);

        const months = data.confirmed.map(item => new Date(item[1]).toLocaleString('default', { month: 'long' }));
        const cases = data.confirmed.map(item => item[0]);
        const deaths = data.death.map(item => item[0]);
        const vaccines = vaccine_data.map(item => item.total_vaccination);

        console.log(vaccines);

        setGraphData({
            months,
            cases,
            deaths,
            vaccines
        });

        console.log(cases, months, deaths)
    }

    function handleSetOptionsIterval() {
        const start = new Date(vaccination_started ? vaccination_started:'');
        const current = new Date();

        const diff = monthDiff(start, current);
        const options = [];

        for(let i = 0; i+2 <= diff; i++) {
            options.push(<option key={i}>Últimos {i+2} meses</option>);
        }

        return options;
    }

    function monthDiff(dateFrom: Date, dateTo: Date) {
        return dateTo.getMonth() - dateFrom.getMonth() + 
          (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }

    useEffect(()=> {
        handleGetDataInterval();
    }, [])

    return (
        <Container>
            <Header>
                <Title>Impacto da vacinação no {country_name}</Title>
                <ConfigWrapper>
                    <MonthIntervalSelect>
                        {handleSetOptionsIterval()}
                    </MonthIntervalSelect>
                </ConfigWrapper>
            </Header>
            <LineChart
                data={graphData}
                title={`Total de vacinas por dia`}
                color="#3E517A"
            />  
        </Container>
    );
}

export default CountriesGraph;