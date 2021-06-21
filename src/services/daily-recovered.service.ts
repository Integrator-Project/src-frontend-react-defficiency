import { DailyRecoveredPeople } from './../models/daily-recovered-people.model';
import { DailyService } from './daily.service';

export class DailyRecoveredService extends DailyService<DailyRecoveredPeople> {

    constructor() {
        super('daily-recovered');
    }

}
