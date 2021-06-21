import { VaccineApplication } from './../models/vaccine-application.model';
import { BaseService } from './base.service';

export class VaccineApplicationService extends BaseService<VaccineApplication> {

    constructor() {
        super('vaccine-application');
    }

}
