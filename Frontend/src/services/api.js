import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getRandomNumber = async () => {
    try {
        const response = await axios.post(`${API_URL}/random`);
        return response.data.value;
    } catch (error) {
        console.error('Error al obtener un número aleatorio:', error);
        throw error;
    }
};
