import { Entity } from './entity.model';

export interface Vaccine extends Entity {
    name: string;
    type?: string;
    description?: string;
    producer?: string;
    CAS_number?: string;
    drug_bank?: string;
    UNII?: string;
    KEGG?: string;
    pub_chem_SID?: string;
}
