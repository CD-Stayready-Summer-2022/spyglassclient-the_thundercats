import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/v1/users";

export function createUser(user) {
  return axios.post(`${BASE_API_URL}/new`, user);
}

