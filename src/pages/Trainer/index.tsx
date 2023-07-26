import { useState } from "react";
import { Link } from "react-router-dom";
import TableHeader from "../../components/TableHeader";
import UserDetail from "./UseDetail";

const users = [
  {
    email: "my-email",
    name: "test",
    gender: "male",
    age: 12,
    phone: "010-0000-0000",
    id: "1",
    role: "User",
  },
  {
    email: "my-email22",
    name: "test2",
    gender: "female",
    age: 34,
    phone: "010-0000-0120",
    id: "2",
    role: "User",
  },
  {
    email: "my-email33",
    name: "test3",
    gender: "female",
    age: 55,
    phone: "010-0000-0120",
    id: "3",
    role: "User",
  },
  {
    email: "my-email44",
    name: "test4",
    gender: "male",
    age: 66,
    phone: "010-0000-0120",
    id: "4",
    role: "User",
  },
];

const UserTable = () => {
  return (
    <>
      <h1>회원 목록</h1>
      <table>
        <TableHeader
          columns={["email", "name", "gender", "age", "phone", "role"]}
        />
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const Trainer = () => {
  const [clicked, setClicked] = useState(false);
  const handleBtnClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <UserTable />
      <button onClick={handleBtnClicked}>상세 정보</button>
      {clicked && <UserDetail users={users} />}
    </>
  );
};

export default Trainer;
