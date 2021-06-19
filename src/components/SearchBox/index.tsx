import React from 'react';

import { Container, SearchIcon, Input } from './styles';

const SearchBox: React.FC = () => {
    return (
        <Container>
            <SearchIcon />
            <Input placeholder='search'/>
        </Container>
    );
}

export default SearchBox;