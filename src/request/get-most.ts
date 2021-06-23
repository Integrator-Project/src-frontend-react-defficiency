import { Country } from "../models/country.model";

export interface GetMost {
    result: [
        {
            country: Country;
            total: number;
            percentage: number;
        }
    ]
}