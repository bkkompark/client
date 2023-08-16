import Axios from "axios";

const axios = Axios.create({
  baseURL: "/trainers",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => status < 500,
});

const TrainerApi = {
  getTrainerAll: () => axios.get("/"),
  getUnknownAll: () => axios.get("/authentication"),
  allowTrainer: (id: string) => axios.patch(`/authentication/${id}`),
  getUserAll: () => axios.get("/all"),
};

export default TrainerApi;
