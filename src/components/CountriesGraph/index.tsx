import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    deaths: number[],
    active_cases: number[],
    recovered_cases: number[]
}

interface ParamProps {
    country: string
}

const CountriesGraph: React.FC<CountriesGrapgProps> = ({
    vaccination_started,
    country_name
}) => {
    const params = useParams<ParamProps>();
    let monthsAgo = 2;
    const [graphData, setGraphData] = useState<GraphData>({
        months:[],
        cases:[],
        deaths:[],
        vaccines:[],
        active_cases: [],
        recovered_cases: []
    })

    async function handleGetDataInterval() {
        const countryService = new CountryService();
        const vaccinationService = new VaccineApplicationService();
        const data = await countryService.GetDailyDataPerMonth(params.country, monthsAgo);

        const vaccine_data = await vaccinationService.getTotalPerMountByCountry(params.country, monthsAgo);

        const months = data.confirmed.map(item => new Date(item[1]).toLocaleString('default', { month: 'long' }));
        const cases = data.confirmed.map(item => item[0]);
        const deaths = data.death.map(item => item[0]);
        const active_cases = data.active.map(item => item[0]);
        const recovered_cases = data.recovered.map(item => item[0]);
        const vaccines = vaccine_data.map(item => item.total_vaccination);

        console.log(vaccines);

        setGraphData({
            months,
            cases,
            deaths,
            vaccines,
            active_cases,
            recovered_cases
        });

        console.log(cases, months, deaths, active_cases, recovered_cases)
    }

    function handleSetOptionsIterval() {
        const start = new Date(vaccination_started ? vaccination_started:'');
        const current = new Date();


        const diff = monthDiff(start, current)
        
        const options = [];

        for(let i = 0; i+2 <= diff; i++) {
            options.push(<option key={i} value={i+2}>Últimos {i+2} meses</option>);
        }

        return options;
    }

    function monthDiff(dateFrom: Date, dateTo: Date) {
        return dateTo.getMonth() - dateFrom.getMonth() + 
          (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    }

    function handleChangeMonthsInterval(e: any) {
        monthsAgo = e.target.value;
        console.log(e.target.value);
        console.log(monthsAgo);
        handleGetDataInterval();
    }

    useEffect(()=> {
        handleGetDataInterval();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Header>
                <Title>Impacto da vacinação no {country_name}</Title>
                <ConfigWrapper>
                    <MonthIntervalSelect onChange={handleChangeMonthsInterval}>
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