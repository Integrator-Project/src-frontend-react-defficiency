import { Country } from './country.model';
import { Entity } from './entity.model';

export interface Daily extends Entity {
    date_time: Date;
    total: number;
    country: Country;
}