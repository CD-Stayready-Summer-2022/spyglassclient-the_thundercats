import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1/users';

const token = sessionStorage.getItem("authToken");

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export function createUser(user) {
    return axios.post(`${BASE_API_URL}/new`, user);
}

export function getUserById(id) {
    return axios.get(`${BASE_API_URL}/${id}`, config);
}

export function updateUser(id, user) {
    return axios.put(`${BASE_API_URL}/${id}`, user, config);
}

export function deleteUser(id) {
    return axios.delete(`${BASE_API_URL}/${id}`, config);
}
