import {
    defineStore
} from 'pinia'

import type TEvaluation from "../common/interfaces/evaluation"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppEvaluation = defineStore('appEvaluation',{
    state: (): {
        datasource: TEvaluation[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async approve_recusedEvaluation(id: string,action : string,id_user : string,type : string,type_evaluation : string) {
            try {
                const body = {
                    id_user  : id_user,
                    id : id,
                    type : type,
                    type_evaluation : type_evaluation
                }

                console.log('approve_recusedEvaluation',body)
                
                const response = await api.request('POST', `evaluations/actions?action=${action}`,body);
                
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        async getEvaluation() {
            try {
                const response = await api.request('GET', 'evaluations');
                this.datasource = <TEvaluation[]>response.data;
                console.log(this.datasource)
            } catch (error) {
                throw error;
            }
        },
        async createEvaluation(data: TEvaluation) {
            try {
                const response = await api.request('POST', 'evaluations', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getEvaluationId(id: string) {
            try {
                const response = await api.request('GET', `evaluations?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        },
        async updateEvaluation(id:String,data: TEvaluation) {
            try {
                const response = await api.request('PUT', `evaluations?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async deleteEvaluation(id : string){
            try {
                const response = await api.request('DELETE', `evaluations?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
        }
    }
}
})