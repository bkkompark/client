import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";
import TableHeader from "../../components/TableHeader";
import TableBody from "../../components/TableBody";

const TrainerAll = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    const { data: users } = await TrainerApi.getUserAll();
    console.log("Trainer", users);
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [loading]);

  return (
    <>
      <h1>트레이너 목록</h1>
      <table>
        <TableHeader
          columns={["email", "name", "gender", "age", "phone", "role"]}
        />
        <TableBody users={users} onRefresh={getUsers} />
      </table>
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
