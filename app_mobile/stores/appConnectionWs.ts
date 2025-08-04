import {
    defineStore
} from 'pinia'


import WebSocketConnection from '../services/ws'


export const useAppConnectionWs = defineStore('appWs',{
    state: (): {
        ws : null  | WebSocketConnection
    } => ({
        ws : null
    }   ),
    getters: {},
    actions: {
        connectWs() {
            this.ws = new WebSocketConnection();
        }  
    }
})