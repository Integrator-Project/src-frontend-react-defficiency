import { Entity } from './entity.model';
import { Country } from './country.model';

export interface TranslationCountry extends Entity {
    country: Country;
    de?: string;
    es?: string;
    fr?: string;
    ja?: string;
    it?: string;
    br?: string;
    pt?: string;
    nl?: string;
    hr?: string;
    fa?: string;
}
