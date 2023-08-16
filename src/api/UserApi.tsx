import Axios from "axios";
import { JoinObject } from "../pages/Join/TrainerJoin";

const axios = Axios.create({
  baseURL: "/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 500,
});

const UserApi = {
  login: (email: string, password: string) =>
    axios.post("login", { email, password }),
  logout: () => axios.post("logout"),
  join: (obj: JoinObject) => axios.post("/join", obj),
  enroll: (name: string, age: number, gender: string, phone: string) =>
    axios.post("customers", { name, age, gender, phone }),
  getUserAll: () => axios.get("/customers"),
};

export default UserApi;
