import React from 'react';

import { Container, Header, Title, ConfigWrapper, HelpIcon } from './styles';

const TopConutriesGraph: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Impacto da vacinação</Title>
                <ConfigWrapper>
                    <HelpIcon />
                </ConfigWrapper>
            </Header>
            
        </Container>
    );
}

export default TopConutriesGraph;