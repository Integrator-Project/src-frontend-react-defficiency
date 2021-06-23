import axios, { AxiosResponse } from 'axios'

export class HttpService {
    env = {
        API_URL: 'https://src-backend-django-defficiency.herokuapp.com/api'
    }
    base_route: string;
    constructor(route: string) {
        this.base_route = route;
    }

    async post<T>(route: string, body: any): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${this.env.API_URL}/${this.base_route}/${route}`,
            method: 'POST',
            data: body
        });
    }

    async get<T>(route: string): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${this.env.API_URL}/${this.base_route}/${route}`,
            method: 'GET'
        });
    }
}
