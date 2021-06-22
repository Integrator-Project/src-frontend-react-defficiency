import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

import { Grid } from './styles';

import Header from '../../components/Header';
import GeneralDataContainer  from '../../components/GeneralDataContainer';
import CountryAnalysisContainer from '../../components/CountryAnalysisContainer';

interface ParamProps {
    country: string
}

const Country: React.FC = () => {
    const params = useParams<ParamProps>();
    
    return (
        <Grid>
            <Header />
            <GeneralDataContainer />
            <CountryAnalysisContainer />
        </Grid>
    );
};

export default Country;