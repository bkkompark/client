import Axios from "axios";

const axios = Axios.create({
  baseURL: "/customers",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 500,
});

const CustomerApi = {
  getCustomerAll: () => axios.get("/"),
  enroll: (
    name: string,
    age: number,
    gender: string,
    phone: string,
    trainerId: string
  ) => axios.post("/", { name, age, gender, phone, trainerId }),
  assign: (trainerId: string, customerId: string) =>
    axios.post(`/${trainerId}/${customerId}`, {
      trainerId,
      customerId,
    }),
};

export default CustomerApi;
