import { apiBaseURL } from "../../config";
import { RulesFacade } from '../services/rules';
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: apiBaseURL
})
export const rulesClient = new RulesFacade(axiosClient)

if (import.meta.env.DEV)
    window.rulesClient = rulesClient