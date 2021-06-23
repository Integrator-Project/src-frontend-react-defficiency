import React from 'react';
import { useHistory } from 'react-router-dom';
import { Country } from '../../models/country.model';

import { Container, Logo, CustomDate, DoubleArrowIcon } from './styles';

interface Props {
    country?: Country;
}

const ApplicationInfo: React.FC<Props> = ({country}) => {
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
            <Logo onClick={handleShowLanding}>Defficiency{country && <span>({country.translations[0].br})</span>}</Logo>

            <CustomDate><DoubleArrowIcon/>{date}</CustomDate>
        </Container>
    );
}

export default ApplicationInfo;