import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Logo, CustomDate, DoubleArrowIcon } from './styles';

const VaccinationsCard: React.FC = () => {
    const date = handleGetDate();
    const history = useHistory();

    function handleShowLanding() {
        history.push('/');
    }

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
            <Logo onClick={handleShowLanding}>Defficiency</Logo>

            <CustomDate><DoubleArrowIcon/>{date}</CustomDate>
        </Container>
    );
}

export default VaccinationsCard;