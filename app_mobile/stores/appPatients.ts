import {
    defineStore
} from 'pinia'


import type TPatient from '~/common/interfaces/patient'

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppPatients = defineStore('appPatients',{
    state: (): {
        datasource: TPatient[]
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getPatient() {
            try {
                const response = await api.request('GET', 'patients');
                this.datasource = <TPatient[]>response.data;
                console.log(this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async createPatient(data: TPatient) {
            try {
                const response = await api.request('POST', 'patients', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getPatientId(id: string) {
            try {
                const response = await api.request('GET', `patients?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async updatePatient(id: String, data: TPatient) {
            try {
                const response = await api.request('PUT', `patients?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async deletePatient(id: string) {
            try {
                const response = await api.request('DELETE', `patients?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})