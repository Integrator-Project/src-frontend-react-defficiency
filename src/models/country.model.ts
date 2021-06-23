import { Entity } from './entity.model';

export interface Country extends Entity {
    name: string;
    slug_api?: string;
    alpha2_code: string;
    alpha3_code: string;
    capital: string;
    region: string;
    sub_region: string;
    population: number;
    area: number;
    native_name: string;
    flag: string;
    numeric_code?: number;
    latitude?: number;
    longitude?: number;
    translations: [
        {
            id: number;
            de: string;
            es: string;
            fr: string;
            ja: string;
            it: string;
            br: string;
            pt: string;
            nl: string;
            hr: string;
            fa: string;
        }
    ]
}
