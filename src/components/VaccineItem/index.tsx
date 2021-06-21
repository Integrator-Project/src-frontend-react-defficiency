import React from 'react';

import vaccineImage from "../../assets/vaccine.png";

import { Container, Identification, Producer } from './styles';

interface CountryItemProps {
    name: string,
    producer: string
}

const CountryItem: React.FC<CountryItemProps> = ({
    name,
    producer
}) => {
    return (
        <Container>
            <Identification>
                <img src={vaccineImage} alt="Icone Vacina" />
                <span>{name}</span>
            </Identification>
            <Producer>
                {producer}
            </Producer>
        </Container>
    );
}

export default CountryItem;