import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";

export const TrainerAll = () => {
  const [loading, setLoading] = useState(true);
  const [trainers, setTrainers] = useState([]);

  const getTrainers = async () => {
    const { data } = await TrainerApi.getTrainerAll();
    console.log(data);
    setTrainers(data);
    setLoading(false);
  };

  useEffect(() => {
    getTrainers();
  }, []);

  return (
    <>
      {trainers.map((trainer: any, index: any) => {
        return (
          <tr key={trainer.phone}>
            <td>{index + 1}</td>
            <td>{trainer.name}</td>
            <td>{trainer.gender}</td>
            <td>{trainer.age}</td>
            <td>{trainer.phone}</td>
            <td>트레이너</td>
            {/* <td>
              <button
                onClick={async () => {
                  const { data } = await TrainerApi.allowTrainer(trainer.name);
                  console.log("allow trainer: " + data);
                }}
              >
                권한 부여
              </button>
            </td> */}
          </tr>
        );
      })}
    </>
  );
};

export const TrainerUnknownAll = () => {
  const [loading, setLoading] = useState(true);
  const [unknownTrainers, setUnknownTrainers] = useState([]);

  const getUnknownTrainers = async () => {
    const { data } = await TrainerApi.getUnknownAll();
    setUnknownTrainers(data);
    setLoading(false);
  };

  useEffect(() => {
    getUnknownTrainers();
  }, []);
};

export const Admin = () => {
  return (
    <>
      <h1>트레이너 목록</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>연락처</th>
            <th>권한</th>
          </tr>
        </thead>
        <tbody>
          <TrainerAll />
        </tbody>
      </table>
    </>
  );
};

export default Admin;
