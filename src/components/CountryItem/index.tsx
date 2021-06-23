import React from 'react';
import { useHistory } from 'react-router-dom';
import { Country } from '../../models/country.model';

import { Container, Identification, Results } from './styles';

interface CountryItemProps {
    position: number;
    country: Country;
    vaccination_percentage: number,
    total_vaccination: number,
    detailed: boolean
}

const CountryItem: React.FC<CountryItemProps> = ({
    position,
    country,
    vaccination_percentage,
    total_vaccination,
    detailed
}) => {
    const history = useHistory();

    function HandleViewMore() {
        history.push(`/${country.alpha2_code.toUpperCase()}`)
    }

    return (
        <Container onClick={HandleViewMore}>
            <Identification>
                <span>{position}</span>
                <img src={country.flag} alt={`Imagem do país ${country.translations[0].br}`} />
                <span>{country.translations[0].br}</span>
            </Identification>
            <Results>
                {detailed && <span>Pessoas vacinadas: {total_vaccination} | {vaccination_percentage}%</span>}
                {!detailed && <span>{total_vaccination}</span>}
            </Results>
        </Container>
    );
}

export default CountryItem;