import { Country } from './../models/country.model';
import { BaseService } from './base.service';

export class CountryService extends BaseService<Country> {

    constructor() {
        super('country');
    }

}
