import { AxiosInstance } from 'axios';
import { Rule } from './types';

export class RulesFacade{
    constructor(private client: AxiosInstance){}

    async getRules(page: number){
        const { data } = await this.client.get<Rule[]>('/rules', {
            params: { page }
        })

        return data
    }
}