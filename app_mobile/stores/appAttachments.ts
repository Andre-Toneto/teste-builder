import {
    defineStore
} from 'pinia'

import type TAttachments from "@/common/interfaces/attachments"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppAttachments = defineStore('appAttachments',{
    state: (): {
        datasource: TAttachments[]
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getAttachmentId(id: string) {
            try {
                const response = await api.request('GET', `attachments?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async getAttachmentOwner(owner: string) {
            console.log('ta caindo na loja?')
            try {
                const response = await api.request('GET', `attachments?owner=${owner}`);
                this.datasource = <TAttachments[]>response.data;

                console.log('como chega a resposta', this.datasource)
                return response.data
            }
            catch (error) {
                console.log('erro em getAttachmentOwner', error)
                throw error;
            }
        },
        async updateAttachments(id: String, data: TAttachments) {
            try {
                const response = await api.request('PUT', `attachments?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async createAttachments(data: TAttachments) {
            try {
                const response = await api.request('POST', 'attachments', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getAttachments() {
            console.log('cai aqui?')
            try {
                const response = await api.request('GET', 'attachments');
                this.datasource = <TAttachments[]>response.data;
                console.log(this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async deleteAttachments(id: string) {
            try {
                const response = await api.request('DELETE', `attachments?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})