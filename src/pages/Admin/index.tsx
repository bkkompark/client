import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";
import TableHeader from "../../components/TableHeader";
import TableBody from "../../components/TableBody";

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
            <TableHeader columns={Object.keys(users[0])} />
            <TableBody users={users} />
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
