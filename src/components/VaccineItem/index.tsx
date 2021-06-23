import React, { useState } from 'react';

import vaccineImage from "../../assets/vaccine.png";
import { Vaccine } from '../../models/vaccine.model';
import DefficiencyModal from '../DefficiencyModal';
import VaccineDetail from '../VaccineDetail';

import { Container, Identification, Producer } from './styles';

interface VaccineItemProps {
    vaccine: Vaccine
}

const VaccineItem: React.FC<VaccineItemProps> = ({
    vaccine
}) => {
    const [isVisible, setVisible] = useState(false);

    const modal = DefficiencyModal({
        title: `Mais detalhes sobre ${vaccine.name}`,
        content:  <VaccineDetail vaccine={vaccine}/>,
        buttonText: "Voltar",
        setVisible: setVisible,
        confirmAction: () => {
            setVisible(false);
        }
    });
    
    function handleShowMore() {
        setVisible(true);
    }

    return (
        <>
            {isVisible && modal}
            <Container onClick={handleShowMore}>
                
                <Identification>
                    <img src={vaccineImage} alt="Icone Vacina" />
                    <span>{vaccine.name}</span>
                </Identification>
                <Producer>
                    {vaccine.type}
                </Producer>
            </Container>
        </>
    );
}

export default VaccineItem;