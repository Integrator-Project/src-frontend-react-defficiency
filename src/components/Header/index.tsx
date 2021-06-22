import React from 'react';

import { Container } from './styles';

import ApplicationInfo from '../ApplicationInfo';
import SearchBox from '../SearchBox';

const Layout: React.FC = () => {
    

    return (
        <Container >
            <ApplicationInfo />
            <SearchBox />
        </Container>
    );
};

export default Layout;