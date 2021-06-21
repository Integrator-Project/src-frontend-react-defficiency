import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid } from './styles';

import Header from '../../components/Header';
import GeneralDataContainer  from '../../components/GeneralDataContainer';
import CountriesContainer from '../../components/CountriesContainer';

import DefficiencyModal from '../../components/DefficiencyModal';

const Landing: React.FC = () => {
    const history = useHistory();
    const [isModalVisible, setModalVisible] = useState(false);

    const modal = DefficiencyModal({
        title: "É um prazer conhecê-lo.",
        message: "Sua conta foi cadastrada com sucesso! Agora é só fazer o Login.",
        buttonText: "Vamos lá!",
        setVisible: setModalVisible,
        confirmAction: () => {
            history.push('/login');
        }
    });

    return (
        <Grid>
            {isModalVisible && modal}
            <Header />
            <GeneralDataContainer />
            <CountriesContainer />
        </Grid>
    );
};

export default Landing;