import { useEffect, useState } from "react";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";

const UserTable = ({ trainers }: any) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const fetchUsers = async () => {
    const response = await CustomerApi.getCustomerAll();
    console.log(response);
    console.log(response.data);

    const users = response.data;

    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [loading]);

  console.log("THIS IS ", trainers);

  return (
    <>
      <h1>회원 목록</h1>
      <table>
        <TableHeader
          columns={["id", "name", "age", "gender", "phone", "trainer"]}
        />
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              {/* <td>{user.trainer}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
