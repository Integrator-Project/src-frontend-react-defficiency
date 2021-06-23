import { DailyDataPerMonth } from '../request/daily-data-per-month';
import { GetAllCountryData } from '../request/get-all-country-data';
import { Country } from './../models/country.model';
import { BaseService } from './base.service';

export class CountryService extends BaseService<Country> {

    constructor() {
        super('country');
    }

    async GetAllCountryData(code2?: string) {
        return (await this.service.get<GetAllCountryData>(`all-data${code2 !== undefined?`?country=${code2.toUpperCase()}`:''}`)).data
    }

    async GetDailyDataPerMonth(alpha2_code:string,last_months = 5, cumulative=0) {
        return (await this.service.get<DailyDataPerMonth>(`daily-data-per-month?last-months=${last_months}&country=${alpha2_code}&cumulative=${cumulative}`)).data
    }
}
