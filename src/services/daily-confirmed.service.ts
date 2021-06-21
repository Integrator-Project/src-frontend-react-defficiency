import { DailyConfirmedCase } from './../models/daily-confirmed-case.model';
import { DailyService } from './daily.service';

export class DailyConfirmedCaseService extends DailyService<DailyConfirmedCase> {

    constructor() {
        super('daily-confirmed');
    }

}
