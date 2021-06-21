import { Entity } from './entity.model';

export interface Vaccine extends Entity {
    name: string;
    producer: string;
}
