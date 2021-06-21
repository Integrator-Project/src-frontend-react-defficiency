import { DailyActiveCase } from './../models/daily-active-case.model';
import { DailyService } from './daily.service';

export class DailyActiveCaseService extends DailyService<DailyActiveCase> {

    constructor() {
        super('daily-active');
    }

}
