import React, { useState, useEffect } from 'react';

import CountryItem from '../CountryItem';
import DefficiencyModal from '../../components/DefficiencyModal';

import { Container, Header, Title, List, Button } from './styles';
import { VaccineApplicationService } from '../../services/vaccine-application.service';
import { GetMost } from '../../request/get-most';

const CountriesList: React.FC = () => {
    const [data, setData] = useState<GetMost>();

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

    async function handleGetCountries() {
        const vaccineApplicationService = new VaccineApplicationService();
        setData((await vaccineApplicationService.getMost('vaccinated', 250)))
    }

    function handleGenerateCountryItem(detailed: boolean) {
        let position = 0;
        return (
            data?.result.map(data => {
                position += 1;
                return <CountryItem
                    key={data.country.id}
                    position={position}
                    country={data.country}
                    detailed={detailed}
                    vaccination_percentage={data.percentage}
                    total_vaccination={data.total}/>
            })
        );
    }

    useEffect(() => {
        handleGetCountries()
    }, [])

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
                { itens?.slice(0, 10) }
            </List>
            <Button onClick={handleShowModal}>Ver todos os países</Button>
        </Container>
    );
}

export default CountriesList;