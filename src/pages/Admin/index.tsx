import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";

export const TrainerTable = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    const { data } = await TrainerApi.getTrainerAll();
    const { data: data2 } = await TrainerApi.getUnknownAll();
    setUsers(data.map((i: any) => ({ ...i, role: "Trainer" })));
    setUsers((users: any[]) => [
      ...users,
      ...data2.map((i: any) => ({ ...i, role: "Unknown" })),
    ]);
    console.log(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [loading]);

  return <>{!loading && <Table title={"트레이너 목록"} arr={users} />}</>;
};

export const Table = <T extends {}>({
  title,
  arr,
}: {
  title: string;
  arr: T[];
}) => {
  return (
    <>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(arr[0]).map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arr.map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((value: any, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const Admin = () => {
  return (
    <>
      <TrainerTable />
    </>
  );
};

export default Admin;
