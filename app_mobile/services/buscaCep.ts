import axios from 'axios';

class BuscaCepService {
    private baseUrl: string;
    baseUrl_lat : string;

    constructor() {
        this.baseUrl = 'https://viacep.com.br/ws';

        if (process.env.NODE_ENV === 'production') {
            this.baseUrl_lat = 'https://api.neovisoapp.online/api/';
        }
        else {
            this.baseUrl_lat = 'http://localhost:8081/api/';
        }
    }

    async buscarCep(cep: string) {
        try {
            const response = await axios.get(`${this.baseUrl}/${cep}/json/`);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao buscar o CEP');
        }
    }

    async buscaLatLong(cep: string, number: string) {
        try {
            const responseLatLong = await axios.get(`${this.baseUrl_lat}localization?cep=${cep}&number=${number}`);
            
            return responseLatLong.data;
        } catch (error) {
            throw new Error('Erro ao buscar o buscaLatLong');
        }
    }
}

export default BuscaCepService;