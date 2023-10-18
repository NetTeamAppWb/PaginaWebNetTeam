import axios from "axios";

const BASE_URL = "http://localhost:3000";
export class UserApiService{

    getUserByEmailAndPassword(email, password) {
        return axios.get(`${BASE_URL}/accounts?email=${email}&password=${password}`);
    }
}