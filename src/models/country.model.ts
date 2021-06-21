import { Entity } from './entity.model';

export interface Country extends Entity {
    name: string;
    alpha2_code: string;
    alpha3_code: string;
    capital: string;
    region: string;
    sub_region: string;
    population: number;
    area: number;
    native_name: string;
    flag: URL;
    numeric_code?: number;
    latitude?: number;
    longitude?: number;
}
