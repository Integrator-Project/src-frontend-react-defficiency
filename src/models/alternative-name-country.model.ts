import { Entity } from './entity.model';
import { Country } from './country.model';

export interface AlternativeNameCountry extends Entity {
    country: Country;
    alternative_name: string;
}
