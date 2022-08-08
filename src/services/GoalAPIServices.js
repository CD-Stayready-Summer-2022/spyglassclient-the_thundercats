import axios from "axios";
const GOAL_BASE_API_URI = "http://localhost:8080/api/v1/recurringgoals";

const token = sessionStorage.getItem("authToken");

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export function createGoal(goal, userId) {
  return axios.post(`${GOAL_BASE_API_URI}/${userId}`, goal, config);
}
export function getGoalById(id) {
  return axios.get(`${GOAL_BASE_API_URI}/${id}`, config);
}
export function getAllGoalsFromUser(user) {
  return axios.get(`${GOAL_BASE_API_URI}/user`, user, config);
}
export function deleteGoal(id) {
  return axios.delete(`${GOAL_BASE_API_URI}/${id}`, config);
}
export function updateGoal(id, goal) {
  return axios.put(`${GOAL_BASE_API_URI}/${id}`, goal, config);
}