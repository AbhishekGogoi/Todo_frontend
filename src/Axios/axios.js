import axios from "axios";
const instance = axios.create({
  baseURL: "https://todo-backend-vys9.onrender.com/api",
});
export default instance;
