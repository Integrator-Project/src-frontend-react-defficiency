import { DailyDeath } from './../models/daily-death.model';
import { DailyService } from './daily.service';

export class DailyDeathService extends DailyService<DailyDeath> {

    constructor() {
        super('daily-death');
    }

}
