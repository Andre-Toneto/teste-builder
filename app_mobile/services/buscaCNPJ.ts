import axios from 'axios';

class BuscaCNPJService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = 'https://publica.cnpj.ws/cnpj/';
    }

    async buscarDadosCNPJ(cnpj: string) {
        try {
            const response = await axios.get(`${this.baseUrl}${cnpj}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar dados do CNPJ:', error);
            throw error;
        }
    }
}

export default BuscaCNPJService;