import { AlternativeName } from './alternative-name.model';
import { Country } from './country.model';

export interface AlternativeNameCountry extends AlternativeName {
    country: Country;
}
