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
    trainer: string
  ) => axios.post("/", { name, age, gender, phone, trainer }),
  assign: (trainerId: string, customerId: string) =>
    axios.post(`/${trainerId}/${customerId}`, {
      trainerId,
      customerId,
    }),
};

export default CustomerApi;
