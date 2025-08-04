export default interface TPatient {
    id: string | null;
    full_name: string | null;
    date_of_birth : string | null;
    id_number : string | null;
    identity_document : string | null;
    phone_number : string | null;
    email : string | null;
    gender : string | null;
    address : string | null;
    city : string | null;
    state : string | null;  
    postal_code : string | null;
    allergies : string | null;
    medications_in_use : Number;
    procedure_restrictions : string | null;
    first_appointment_date : string | null;
    id_user : string | null;
    last_procedure_date : string | null;
    notes : string | null;
    number : string | null;
    complement : string | null;
}