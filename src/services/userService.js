import axios from "../axios";
const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email: email, password: password });
};

const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createUserApi = (data) => {
  return axios.post("/api/create-new-user", data);
};

const deleteUserApi = (userId) => {
  return axios.delete("/api/delete-user", { data: { id: userId } });
};

const updateUserApi = (user) => {
  return axios.put("/api/edit-user", user);
};

export {
  handleLoginApi,
  getAllUsers,
  createUserApi,
  deleteUserApi,
  updateUserApi,
};
