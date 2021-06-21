import React from 'react';

import { Grid } from './styles';

import Header from '../../components/Header';
import GeneralDataContainer  from '../../components/GeneralDataContainer';
import CountriesContainer from '../../components/CountriesContainer';

const Landing: React.FC = () => {
    

    return (
        <Grid>
            
            <Header />
            <GeneralDataContainer />
            <CountriesContainer />
        </Grid>
    );
};

export default Landing;