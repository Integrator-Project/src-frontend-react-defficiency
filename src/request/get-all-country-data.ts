import { Country } from "../models/country.model";
import { Vaccine } from "../models/vaccine.model";

export interface GetAllCountryData {
    country: Country;
    vaccination: {
        started: string;
        last_update: Date;
        percentage_second_dose: number,
        percentage_first_dose: number,
        total_vaccination: number,
        people_vaccinated: number,
        people_fully_vaccinated: number,
        vaccines: [
            vaccine: Vaccine
        ]
    };
    daily: {
        confirmed: {
          value: number,
          last_update: Date
        },
        active: {
          value: number,
          last_update: Date
        },
        recovered: {
          value: number,
          last_update: Date
        },
        death: {
          value: number,
          last_update: Date
        }
    }
}