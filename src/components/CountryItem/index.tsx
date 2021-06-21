import React from 'react';

import { Container, Identification, Results } from './styles';

interface CountryItemProps {
    id: number,
    avatar_url: string,
    name: string,
    vaccination_percentage: number,
    total_vaccination: number,
    detailed: boolean
}

const CountryItem: React.FC<CountryItemProps> = ({
    id,
    avatar_url,
    name,
    vaccination_percentage,
    total_vaccination,
    detailed
}) => {
    return (
        <Container>
            <Identification>
                <span>{id}</span>
                <img src={avatar_url} alt={`Imagem do país ${name}`} />
                <span>{name}</span>
            </Identification>
            <Results>
                {detailed && <span>Pessoas vacinadas: {total_vaccination} | {vaccination_percentage}%</span>}
                {!detailed && <span>{vaccination_percentage}%</span>}
            </Results>
        </Container>
    );
}

export default CountryItem;