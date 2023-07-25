import Axios from "axios";

export type JoinObject =
  | {}
  | {
      name: string;
      password: string;
      passwordConfirm: string;
      gender: "남자" | "여자";
      age: number;
      phone: string;
      email: string;
    };

const axios = Axios.create({
  baseURL: "/api",
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
};

export default UserApi;
