import {
    defineStore
} from 'pinia'

import type TProducts from "../common/interfaces/products"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppProducts = defineStore('appProducts',{
    state: (): {
        datasource: TProducts[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async getProducts() {
            try {
                const response = await api.request('GET', 'product');
                this.datasource = <TProducts[]>response.data;
                console.log('ta chegando?', this.datasource);
            } catch (error) {
                throw error;
            }
        },
        async createProduct(data: TProducts) {
            try {
                const response = await api.request('POST', 'product', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async updatProduct(id: String, data: TProducts) {
            try {
                const response = await api.request('PUT', `product?id=${id}`, data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async getProductId(id: string) {
            try {
                const response = await api.request('GET', `product?id=${id}`);
                return response.data
            }
            catch (error) {
                throw error;
            }
        }, 
        async deleteProduct(id : string){
            try {
                const response = await api.request('DELETE', `product?id=${id}`);
                return response.data
            } catch (error) {
                throw error;
            }
        }
    }
})