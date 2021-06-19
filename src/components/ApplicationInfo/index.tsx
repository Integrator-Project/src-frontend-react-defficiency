import React from 'react';

import { Container, Logo, CustomDate, DoubleArrowIcon } from './styles';

const VaccinationsCard: React.FC = () => {
    const date = handleGetDate();

    function handleGetDate() {
        const date = new Date();

        const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    return (
        <Container>
            <Logo>Defficiency</Logo>

            <CustomDate><DoubleArrowIcon/>{date}</CustomDate>
        </Container>
    );
}

export default VaccinationsCard;