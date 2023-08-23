import { useState, useEffect } from "react";

import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { TrainerApi } from "../../api";

export const Trainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getTrainers = async () => {
    const { data } = await TrainerApi.getTrainerAll();
    console.log("trainer : ", data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getTrainers();
  }, [loading]);

  return (
    <>
      <UserForm />
      <UserTable trainers={data} />
    </>
  );
};

export default Trainer;
