import {
    defineStore
} from 'pinia'

import HttpRequest from '../services/request'

import type TSchedule from "@/common/interfaces/scheduling"

const api = new HttpRequest();

export const useScheduling = defineStore('appScheduling',{
    state: (): {
        datasource: TSchedule[],
        datasourceHistory: TSchedule[]
    } => ({
        datasource: [],
        datasourceHistory: []
    }),
    getters: {},
    actions: {
        async confirmScheduling(id: string) {
            try {
                
                const response = await api.request('POST', `scheduling?action=confirmed&id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async getScheduleHistory() {
            try {
                const response = await api.request('GET', 'scheduling?history=true');
                this.datasourceHistory = <TSchedule[]>response.data;
            } catch (error) {
                throw error;
            }
        },
        async getSchedule() {
            try {
                const response = await api.request('GET', 'scheduling');
                this.datasource = <TSchedule[]>response.data;
            } catch (error) {
                throw error;
            }
        },
        async getScheduleId(id: string) {
            try {
                const response = await api.request('GET', `scheduling?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async getScheduleOwner(user_type: string, id: string) {
            try {
                const response = await api.request('GET', `scheduling?id=${id}&user_type=${user_type}`);
                this.datasource = <TSchedule[]>response.data;
            }
            catch (error) {
                throw error;
            }
        },
        async updateSchedule(id: String, data: TSchedule) {
            try {
                const response = await api.request('PUT', `scheduling?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async createSchedule(data: TSchedule) {
            try {
                const response = await api.request('POST', 'scheduling', data);
                
                console.log('ta caindo no cria agendamento?', data)
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async deleteSchedule(id: string) {
            try {
                const response = await api.request('DELETE', `scheduling?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})