import {
    defineStore
} from 'pinia'

import type TClinic from "../common/interfaces/clinic"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppClinic = defineStore('appClinic',{
    state: (): {
        datasource: TClinic[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getClinics() {
            try {
                const response = await api.request('GET', 'clinic');
                this.datasource = <TClinic[]>response.data;
                console.log(this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async createClinic(data: TClinic) {
            try {
                const response = await api.request('POST', 'clinic', data);
                return response.data
            } catch (error) {
                throw error;
            }0
        },
        async getClinicId(id: string) {
            try {
                const response = await api.request('GET', `clinic?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async updateClinic(id:String,data: TClinic) {
            try {
                const response = await api.request('PUT', `clinic?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async deleteClinic(id : string){
            try {
                const response = await api.request('DELETE', `clinic?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
        }
    }
}
})