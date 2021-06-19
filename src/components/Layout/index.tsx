import React from 'react';

import { Grid } from './styles';

import Header from '../Header';
import GeneralDataContainer  from '../GeneralDataContainer';
import TopConutriesContainer from '../TopCountriesContainer';


const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <GeneralDataContainer />
            <TopConutriesContainer />
        </Grid>
    );
};

export default Layout;