import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";

const Trainer = () => {
  const [loading, setLoading] = useState(true);
  const [trainers, setTrainers] = useState<any>([]);

  const getTrainers = async () => {
    const { data: trainers } = await TrainerApi.getTrainerAll();
    setTrainers(trainers);
    setLoading(false);
  };

  useEffect(() => {
    getTrainers();
  }, [loading]);

  return (
    <>
      <h1>담당 트레이너</h1>

      <select>
        <option>선택</option>
        {trainers.map((trainer: any) => (
          <option key={trainer.id} value={trainer.id}>
            {trainer.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Trainer;
