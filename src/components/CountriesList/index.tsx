import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CountryItem from '../CountryItem';
import DefficiencyModal from '../../components/DefficiencyModal';

import { Container, Header, Title, List, Button } from './styles';

const CountriesList: React.FC = () => {
    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);
    const itens = Array.from(Array(30).keys()).map((n) => (
        <CountryItem
            key={n}
            id={n+1} 
            avatar_url='https://restcountries.eu/data/col.svg'
            name='Colômbia'
            detailed={false}
            vaccination_percentage={60}
            total_vaccination={21321521}/>
    ));

    const itens2 = Array.from(Array(30).keys()).map((n) => (
        <CountryItem
            key={n}
            id={n+1} 
            avatar_url='https://restcountries.eu/data/col.svg'
            name='Colômbia'
            detailed={true}
            vaccination_percentage={60}
            total_vaccination={21321521}/>
    ));

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
                { itens }
            </List>
            <Button onClick={handleShowModal}>Ver todos os países</Button>
        </Container>
    );
}

export default CountriesList;