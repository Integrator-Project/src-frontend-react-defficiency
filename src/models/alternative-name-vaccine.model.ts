import { Vaccine } from './vaccine.model';
import { AlternativeName } from './alternative-name.model';

export interface AlternativeNameCountry extends AlternativeName {
    vaccine: Vaccine;
}
