import React from 'react';

import CountryItem from '../CountryItem';

import { Container, Header, Title, List, Button } from './styles';

const TopCountriesList: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Países que mais vacinaram</Title>
            </Header>
            <List>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
                <CountryItem 
                id={1} 
                avatar_url='https://restcountries.eu/data/col.svg'
                name='Colombia'
                vaccination_percentage={60}
                total_vaccination={21321521}/>
            </List>
            <Button>Ver todos os países</Button>
        </Container>
    );
}

export default TopCountriesList;