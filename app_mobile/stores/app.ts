import {
    defineStore
} from 'pinia'

import type TUser from '~/common/interfaces/user'

import type TLogin from '~/common/interfaces/user'

import type TMessage from '~/common/interfaces/app'

import HttpRequest from '../services/request'

const api = new HttpRequest();

export const useApp = defineStore('app',{
    state: (): {
        user: TUser,
        message : TMessage,
        logged : Boolean
    } => ({
        user: {
            id: '',
            user : '',
            password : null,
            name: '',
            identification: '',
            landline: null,
            cell_phone : '',
            email : '',
            professional_council_number : '',
            professional_training : '',
            aesthetics_course : '',
            name_of_institution : '',
            completion_date : '',
            proof_of_completion : '',
            specialty_to_perform_aesthetic_procedures : 0,
            fillers : 0,
            botulinum_toxin : null,
            pdo_threads : null,
            active : 1,
            user_type : 'N',
            city : '',
            state : '',
            zip_code : '',
            proof_of_address : '',
            date_inserted : '',
            experience_in_injectables : 1,
            id_clinic : '',
            medical_specialty : '',
            color_schedule : '#26A69A',
            notifications : [],
            notifications_qtd : 0,
            image_profile : null
        },
        message : {
            show : false,
            color : 'primary',
            text : ''
        },
        logged : false
    }),
    getters: {},
    actions: {
        async login(data : TLogin) {
            try {
                const response = await api.request('POST', 'login', data);
                return response.data
            } catch (error) {
                throw error;
            }
        },
        async setUser(data : TUser) {
            this.user = data 
            this.user.image_profile = data.image_profile
        }
    }
})