import { Entity } from './../models/entity.model';
import { HttpService } from './http.service';

export abstract class BaseService<T extends Entity> {

    service: HttpService;
    model_route: string;

    constructor(model_route: string) {
        this.model_route = model_route;
        this.service = new HttpService();
    }

    async getAll() {
        return (await this.service.get<T[]>(`${this.model_route}/`)).data
    }

    async getById(id: number) {
        return (await this.service.get<T>(`${this.model_route}/${id}/`)).data
    }
}
