import { useState, useEffect } from "react";
import { TrainerApi } from "../../api";
import Table from "../../components/Table";

export const TrainerAll = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    const { data } = await TrainerApi.getUserAll();
    console.log(data);
    setUsers(
      data.map(
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
    // console.log(users);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, [loading]);

  return <>{!loading && <Table title={"트레이너 목록"} arr={users} />}</>;
};

export const Admin = () => {
  return (
    <>
      <TrainerAll />
    </>
  );
};

export default Admin;
