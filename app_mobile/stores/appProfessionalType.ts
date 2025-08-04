import {
    defineStore
} from 'pinia'

import type TProfessionalType from "../common/interfaces/professionalType"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppProfessionalType = defineStore('appProfessionalType',{
    state: (): {
        datasource: TProfessionalType[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getProfessionalType() {
            try {
                const response = await api.request('GET', 'professional_type');
                this.datasource = <TProfessionalType[]>response.data;
            } catch (error) {
                throw error;
            }
        },
        async createProfessionalType(data: TProfessionalType) {
            try {
                const response = await api.request('POST', 'professional_type', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async updatProfessionalType(id: String, data: TProfessionalType) {
            try {
                const response = await api.request('PUT', `professional_type?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getProfessionalTypeId(id: string) {
            try {
                const response = await api.request('GET', `professional_type?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        }, 
        async deleteProfessionalType(id : string){
            try {
                const response = await api.request('DELETE', `professional_type?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})