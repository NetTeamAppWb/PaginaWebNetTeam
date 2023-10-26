import axios from "axios";

const BASE_URL = "http://localhost:3000";
export class UserApiService{
    constructor() {
        this.BASE_URL = BASE_URL;
    }
    getUserByEmailAndPassword(email, password) {
        return axios.get(`${BASE_URL}/accounts?email=${email}&password=${password}`);
    }
    async registerUser(userData) {
        try {
            const response = await axios.post(`${this.BASE_URL}/accounts`, userData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    getRestaurants() {
        return axios.get(`${BASE_URL}/restaurants`);
    }

}