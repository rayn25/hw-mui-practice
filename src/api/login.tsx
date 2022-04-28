import axios from 'axios';
import { API_URL } from 'configs';

export const login = async (params: Object) => {
    console.log(params);
    const response = await axios.post<User>(API_URL + '/account', params);
    if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data; // posts 배열
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const register = () => {};

export const getCurrentUser = () => {};

export interface User {
    id: string;
    password: string;
    name: string;
    accessToken: string;
}
