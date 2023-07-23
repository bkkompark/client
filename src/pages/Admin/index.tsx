import { TrainerApi } from "../../api";

const trainers = [
  {
    name: "kimchilove1",
    age: 23,
    gender: "male",
    phone: "010-1234-5678",
    role: "Unknown",
    id: 1,
  },
  {
    name: "kimchilove2",
    age: 54,
    gender: "female",
    phone: "010-1234-5678",
    role: "Unknown",
    id: 2,
  },
  {
    name: "kimchilove3",
    age: 32,
    gender: "female",
    phone: "010-1234-5678",
    role: "Unknown",
    id: 3,
  },
  {
    name: "kimchilove4",
    age: 55,
    gender: "male",
    phone: "010-1234-5678",
    role: "Unknown",
    id: 4,
  },
];

export const Admin = async () => {
  const { data: trainers } = await TrainerApi.getUnknownAll();
  // console.log(trainers);
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
          {trainers.map((trainer: any, index: any) => {
            // const authenticationURL = (userEmail: any) => {
            //   const targetUrl = `http://localhost:3000/trainers/authentication/${userEmail}`;
            //   window.location.href = targetUrl;
            // };

            return (
              <tr key={trainer.phone}>
                <td>{index + 1}</td>
                <td>{trainer.name}</td>
                <td>{trainer.gender}</td>
                <td>{trainer.age}</td>
                <td>{trainer.phone}</td>
                <td>
                  <button
                    onClick={async () => {
                      const { data } = await TrainerApi.allowTrainer(
                        trainer.name
                      );
                      console.log(data);
                    }}
                  >
                    권한 부여
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
