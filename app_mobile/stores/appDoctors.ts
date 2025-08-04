import {
    defineStore
} from 'pinia'

import type TUser from "@/common/interfaces/user"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppDoctors = defineStore('appDoctors',{
    state: (): {
        datasource: TUser[]
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getDoctorId(id: string) {
            try {
                const response = await api.request('GET', `users?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async updateDoctor(id: String, data: TUser) {
            try {
                const response = await api.request('PUT', `users?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async createDoctor(data: TUser) {
            try {
                const response = await api.request('POST', 'users', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getDoctors() {
            try {
                const response = await api.request('GET', 'users');
                this.datasource = <TUser[]>response.data;
                console.log(this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async deleteDoctor(id: string) {
            try {
                const response = await api.request('DELETE', `users?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})