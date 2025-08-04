import {
    defineStore
} from 'pinia'

import type TNotification from "../common/interfaces/notification"

import HttpRequest from '../services/request'

import { useApp } from '@/stores/app';

const api = new HttpRequest();

export const useAppNotification = defineStore('appNotification',{
    state: (): {
        datasource: TNotification[],
    } => ({
        datasource: []
    }),
    getters: {},
    actions: {
        async viewed_notification(id: string) {
            try {
                const body = {
                    viewed  :  1    
                }
                
                const response = await api.request('POST', `notifications?id=${id}`,body);

              
                const data = response.data as [TNotification[], number];
                
                useApp().user.notifications = data[0];
                useApp().user.notifications_qtd = data[1];
                
                return response.data;
            } catch (error) {
                throw error;
            }
        },
}
})