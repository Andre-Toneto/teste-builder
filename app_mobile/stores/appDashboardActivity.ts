import {
    defineStore
} from 'pinia'

import type TDashboardActivity from "@/common/interfaces/dashboardActivity"

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useAppDashboardActivity = defineStore('AppDashboardActivity', {
    state: (): {
        datasource: TDashboardActivity
    } => ({
        datasource: {
            total_users: 0,
            percentage_change_users: 0,
            total_clinics : 0,
            percentage_change_clinics : 0,
            total_scheduling : 0,
            percentage_change_scheduling : 0,
            total_transaction : 0,
            percentage_change_transaction : 0,
            series_fat : [],
            categories_fat : [],
            analysis_professional : [],
            analysis_clinic : []
        }
    }),
    getters: {},
    actions: {
        async getBusinessActivity() {
            try {
                const response = await api.request('GET', `dashboards`);
                this.datasource = response.data as TDashboardActivity
                console.log(this.datasource)
            }
            catch (error) {
                throw error;
            }
        }
    }
})