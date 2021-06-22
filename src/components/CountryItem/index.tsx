import React from 'react';
import { useHistory } from 'react-router-dom';
import { Country } from '../../models/country.model';

import { Container, Identification, Results } from './styles';

interface CountryItemProps {
    country: Country;
    vaccination_percentage: number,
    total_vaccination: number,
    detailed: boolean
}

const CountryItem: React.FC<CountryItemProps> = ({
    country,
    vaccination_percentage,
    total_vaccination,
    detailed
}) => {
    const history = useHistory();

    function HandleViewMore() {
        history.push(`/${country.alpha3_code}`)
    }

    return (
        <Container onClick={HandleViewMore}>
            <Identification>
                <span>{country.id}</span>
                <img src={country.flag} alt={`Imagem do país ${country.name}`} />
                <span>{country.name}</span>
            </Identification>
            <Results>
                {detailed && <span>Pessoas vacinadas: {total_vaccination} | {vaccination_percentage}%</span>}
                {!detailed && <span>{vaccination_percentage}%</span>}
            </Results>
        </Container>
    );
}

export default CountryItem;