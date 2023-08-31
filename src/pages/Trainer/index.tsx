import { useState, useEffect } from "react";

import CustomerForm from "./CustomerForm";
import CustomerTable from "./CustomerTable";
import { TrainerApi } from "../../api";

export const Trainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const getTrainers = async () => {
    const { data } = await TrainerApi.getTrainerAll();
    // console.log("trainer : ", data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getTrainers();
  }, [loading]);

  return (
    <>
      <CustomerForm trainers={data} />
      <CustomerTable trainers={data} />
    </>
  );
};

export default Trainer;
