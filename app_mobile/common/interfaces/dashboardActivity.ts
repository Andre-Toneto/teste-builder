export default interface TDashboardActivity {
    total_users : number;
    percentage_change_users : number;
    total_clinics : number;
    percentage_change_clinics : number;
    total_scheduling : number;
    percentage_change_scheduling : number;
    total_transaction : number;
    percentage_change_transaction : number;
    series_fat : Array<string>;
    categories_fat : Array<string>;
    analysis_professional : Array<Object>;
    analysis_clinic : Array<Object>;
}