import React from 'react';

import { Container, Title, Amount } from './styles';

interface Props {
    title: string;
    amount: number;
    improving: boolean;
}

const VaccinationsCard: React.FC<Props> = ({
    title, amount, improving
}) => {
    return (
        <Container>
            <Title>{title}</Title>

            <Amount improving={improving}>{amount.toLocaleString('pt-br')}</Amount>
        </Container>
    );
}

export default VaccinationsCard;