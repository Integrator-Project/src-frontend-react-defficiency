import React from 'react';

import { Container } from './styles';

import ApplicationInfo from '../ApplicationInfo';
import SearchBox from '../SearchBox';
import { Country } from '../../models/country.model';

interface Props {
    country?: Country;
}

const Header: React.FC<Props> = ({country}) => {
    return (
        <Container >
            <ApplicationInfo country={country} />
            <SearchBox />
        </Container>
    );
};

export default Header;