import React from 'react';

import { Vaccine } from '../../models/vaccine.model';

import { Container, Text  } from './styles';

interface VaccineDetailProps {
    vaccine: Vaccine
}

const VaccineDetail: React.FC<VaccineDetailProps> = ({
    vaccine
}) => {
    return (
        <Container>
            <Text><strong>Nome:</strong> {vaccine.name !== null ? vaccine.name : '-'}</Text>
            <Text><strong>Tipe:</strong> {vaccine.type !== null ? vaccine.type : '-'}</Text>
            <Text><strong>Fabricante:</strong> {vaccine.producer !== null ? vaccine.producer : '-'}</Text>
            <Text><strong>Drug Bank:</strong> {vaccine.drug_bank !== null ? vaccine.drug_bank : '-'}</Text>
            <Text><strong>CAS number:</strong> {vaccine.CAS_number !== null ? vaccine.CAS_number : '-'}</Text>
            <Text><strong>UNII:</strong> {vaccine.UNII !== null ? vaccine.UNII : '-'}</Text>
            <Text><strong>KEGG:</strong> {vaccine.KEGG !== null ? vaccine.KEGG : '-'}</Text>
            <Text><strong>Pub chem SID:</strong> {vaccine.pub_chem_SID !== null ? vaccine.pub_chem_SID : '-'}</Text>
        </Container>
    );
}

export default VaccineDetail;