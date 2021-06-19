import React from 'react';

import { Grid } from './styles';

import ApplicationInfo from '../ApplicationInfo';
import SearchBox from '../SearchBox';

import GeneralDataContainer  from '../GeneralDataContainer';
import TopConutriesContainer from '../TopCountriesContainer';


const Layout: React.FC = () => {
    return (
        <Grid>
            <ApplicationInfo />
            <SearchBox />
            <GeneralDataContainer />
            <TopConutriesContainer />
        </Grid>
    );
};

export default Layout;