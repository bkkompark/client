import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";
// import Table from "../../components/Table";

const handleGrantTrainer = async (userId: any) => {
  const { data } = await TrainerApi.allowTrainer(userId);
  console.log(data);
};

const TrainerAll = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    const { data: users } = await TrainerApi.getUserAll();
    console.log(users);
    setUsers(
      users.map(
        ({ email, name, gender, age, phone, role }: any, index: any) => ({
          index,
          email,
          name,
          gender,
          age,
          phone,
          role,
        })
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [loading]);

  return (
    <>
      {!loading && (
        <>
          <h1>트레이너 목록</h1>
          <table>
            <thead>
              <tr>
                {Object.keys(users[0]).map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user.id}>
                  {Object.values(user).map((value: any, index) => (
                    <td key={index}>{value}</td>
                  ))}
                  {user.role === "Trainer" ? (
                    <td></td>
                  ) : (
                    <td>
                      <button onClick={() => handleGrantTrainer(user.id)}>
                        권한 부여
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export const Admin = () => {
  return (
    <>
      <TrainerAll />
    </>
  );
};

export default Admin;
