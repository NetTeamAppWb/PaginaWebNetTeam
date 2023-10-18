import axios from "axios";

const BASE_URL = "http://localhost:3000";
export class UserApiService{

    constructor() {
        this.BASE_URL = BASE_URL;
    }

    async getUserByEmailAndPassword(email, password) {
        return axios.get(`${this.BASE_URL}/accounts?email=${email}&password=${password}`);
    }

    async registerUser(userData) {
        return axios.post(`${this.BASE_URL}/accounts`, userData);
    }
}