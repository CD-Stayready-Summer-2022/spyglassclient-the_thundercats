import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/api/v1/users';

const token =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmFuZ3VhcmQtc3B5Z2xhc3MiLCJhdWQiOiJ2YW5ndWFyZC1zcHlnbGFzcyIsImF1dGhfdGltZSI6MTY1OTk3MzI3NCwidXNlcl9pZCI6IkZicWFuNmFJOE9NeGJqWG1yYjd5OXNIMjNLaTEiLCJzdWIiOiJGYnFhbjZhSThPTXhialhtcmI3eTlzSDIzS2kxIiwiaWF0IjoxNjU5OTczMjc0LCJleHAiOjE2NTk5NzY4NzQsImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEBlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.CNa5Fn1f4lKiip1G6ysBN9UfRX4hoRGzw22TkDkdXcLgX-Gi-mFYAFG2PTOxPf1LYByowQF9puNOJGjws9GYTnLRJ27SmlXAq53Rs3Pm7q2jGmNvaRf5SHbLgKX-FY7ga-IIbYIzNVFXxkLrZlL9XdLk5eBA83aM3MzMOGG_dNgoEjde8JdCvl2sGkv4OgJlb7AtBs6wzAg8bVSbYGaFvG5r3-IzThiRlsdUKPrseh1E3iaq33eKjjKNgWOOz2kREjKfQaFpXAAksx_9yUlJXkuny7MlRKVxOddVinVq63RAG9BqdkRI628-cWq56MRe9lfVc8uFdGzyTamBgQdWKw';

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
