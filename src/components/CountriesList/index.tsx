import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CountryItem from '../CountryItem';
import DefficiencyModal from '../../components/DefficiencyModal';

import { Container, Header, Title, List, Button } from './styles';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service'

const CountriesList: React.FC = () => {
    const [country, setCountry] = useState<Country[]>([]);

    async function handleGetCountries() {
        const countryService = new CountryService();
        setCountry(await countryService.getAll())
    }

    function handleGenerateCountryItem(detailed: boolean) {
        return (
            country.map(country => {
                return <CountryItem
                    key={country.id}
                    country={country}
                    detailed={detailed}
                    vaccination_percentage={60}
                    total_vaccination={21321521}/>
            })
        );
    }

    useEffect(() => {
        handleGetCountries()
    }, [])

    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);
    const itens = handleGenerateCountryItem(false);

    const itens2 = handleGenerateCountryItem(true);

    const modal = DefficiencyModal({
        title: "Clique em um pais para visualizar mais!",
        content: itens2,
        buttonText: "Voltar",
        setVisible: setModalVisible,
        confirmAction: () => {
            setModalVisible(false);
        }
    });

    function handleShowModal() {
        setModalVisible(true);
    }

    return (
        <Container>
            {isModalVisible && modal}
            <Header>
                <Title>Países que mais vacinaram</Title>
            </Header>
            <List>
                { itens.slice(0, 5) }
            </List>
            <Button onClick={handleShowModal}>Ver todos os países</Button>
        </Container>
    );
}

export default CountriesList;