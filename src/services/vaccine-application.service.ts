import { GetMost } from '../request/get-most';
import { GetTotalPerMountByCountry } from '../request/get-total-per-mount-by-country';
import { VaccineApplication } from './../models/vaccine-application.model';
import { BaseService } from './base.service';

export class VaccineApplicationService extends BaseService<VaccineApplication> {

    constructor() {
        super('vaccine-application');
    }

    async getMost(type: string, limit: number = 20) {
        return (await this.service.get<GetMost>(`most?type=${type}&limit=${limit}`)).data
    }

    async getTotalPerMountByCountry(alpha_code2: string, last_months=5, cumulative=0) {
        return (await this.service.get<GetTotalPerMountByCountry[]>(`total-per-month/${alpha_code2}?last-months=${last_months}&cumulative=${cumulative}`)).data
    }
}
