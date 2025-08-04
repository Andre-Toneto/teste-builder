import type TNotification from "@/common/interfaces/notification"

export default interface TUser {
    id: string | null,
    user : string | null,
    password : string | null,
    name: string | null,
    identification : string | null,
    landline : string | null,
    cell_phone : string | null,
    email : string | null,
    professional_council_number : string | null,
    professional_training :  string | null,
    aesthetics_course : string | null, 
    name_of_institution : string | null, 
    completion_date :  string | null, 
    proof_of_completion : string | null, 
    specialty_to_perform_aesthetic_procedures : Number | null, 
    fillers : Number | null,
    botulinum_toxin :  string | null,
    pdo_threads : string | null,
    active : number,
    user_type: string | null,
    city : string | null,
    state : string | null,
    zip_code : string | null,
    proof_of_address : string | null,
    date_inserted :  string | null,
    experience_in_injectables : Number | null,
    id_clinic :  string | null,
    medical_specialty : string | null,
    color_schedule : string | null,
    notifications : TNotification[],
    notifications_qtd : number,
    image_profile : string | null
}

export default interface TLogin {
    user : string | null,
    password  : string | null,
}