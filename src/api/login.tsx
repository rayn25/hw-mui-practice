import axios from 'axios';

export const login = async (params: Object) => {
    console.log(params);
    const response = await axios.get<User>('http://localhost:4000/account');
    return response.data; // posts 배열
};

export const logout = () => {};

export interface User {
    id: string;
    password: string;
    name: string;
}
