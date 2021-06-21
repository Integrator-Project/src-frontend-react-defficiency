import { Entity } from './entity.model';
import { Vaccine } from './vaccine.model';
import { Country } from './country.model';

export interface VaccineApplication extends Entity {
    date_field: Date;
    total_vaccinations: number;
    people_vaccinated: number;
    people_fully_vaccinated: number;
    source_url: URL;
    country: Country;
    vaccine: Vaccine;
}
