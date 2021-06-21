import { Vaccine } from './../models/vaccine.model';
import { BaseService } from './base.service';

export class VaccineService extends BaseService<Vaccine> {

    constructor() {
        super('vaccine');
    }

}
