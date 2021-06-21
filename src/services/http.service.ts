import axios, { AxiosResponse } from 'axios'

export class HttpService {
    env = {
        API_URL: 'http://127.0.0.1:8000/api'
    }

    async post<T>(route: string, body: any): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${this.env.API_URL}/${route}`,
            method: 'POST',
            data: body
        });
    }

    async get<T>(route: string): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${this.env.API_URL}/${route}`,
            method: 'GET'
        });
    }
}
