import React from 'react';

import vaccineImage from "../../assets/vaccine.png";
import { Vaccine } from '../../models/vaccine.model';

import { Container, Identification, Producer } from './styles';

interface VaccineItemProps {
    vaccine: Vaccine
}

const VaccineItem: React.FC<VaccineItemProps> = ({
    vaccine
}) => {
    return (
        <Container>
            <Identification>
                <img src={vaccineImage} alt="Icone Vacina" />
                <span>{vaccine.name}</span>
            </Identification>
            <Producer>
                {vaccine.type}
            </Producer>
        </Container>
    );
}

export default VaccineItem;