import {
    defineStore
} from 'pinia'


import type TPricing from "../common/interfaces/pricing"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppPricing = defineStore('appPricing', {
    state: (): {
        datasource: TPricing[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getPricing() {
            try {
                const response = await api.request('GET', 'princing');
                this.datasource = <TPricing[]>response.data;
                console.log(this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async createPricing(data: TPricing) {
            try {
                const response = await api.request('POST', 'princing', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getPricingId(id: string) {
            try {
                const response = await api.request('GET', `princing?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async updatePricing(id:String,data: TPricing) {
            try {
                const response = await api.request('PUT', `princing?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async deletePricing(id : string){
            try {
                const response = await api.request('DELETE', `princing?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async lookupPrincing(){
            try {
                const response = await api.request('GET', `princing?fields=id,description`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        }
    }
})