import { Daily } from './../models/daily.model';
import { BaseService } from './base.service';

export abstract class DailyService<T extends Daily> extends BaseService<T> {

}
