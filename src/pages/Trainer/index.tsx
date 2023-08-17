import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { TrainerApi, UserApi } from "../../api";

import TableHeader from "../../components/TableHeader";
import UserDetail from "./UseDetail";

export type enrollObject = {
  name: string;
  age: number;
  gender: "남자" | "여자";
  phone: string;
};

const UserForm = () => {
  // callback 함수
  const enrollUser = async (userInfo: enrollObject) => {
    const { name, age, gender, phone } = userInfo;
    const { data } = await UserApi.enroll(name, age, gender, phone);
    console.log(data);

    // const { data2 } = await UserApi.assign(trainerId, customerId);
    // console.log(data2);
  };

  const [values, handleChange, handleSubmit, error] = useForm<enrollObject>(
    {
      name: "",
      age: 0,
      gender: "남자",
      phone: "",
      // trainerId: "",
      // customerId: "",
    },
    enrollUser // callback 함수가 promise 를 반환
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>회원 등록</h1>
        <input type="" name="name" placeholder="NAME" onChange={handleChange} />
        <input
          type="number"
          name="age"
          placeholder="AGE"
          onChange={handleChange}
        />
        <select name="gender" onChange={handleChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <input
          type=""
          name="phone"
          placeholder="PHONE"
          onChange={handleChange}
        />
        <select name="trainer" id="trainer-select" onChange={handleChange}>
          <option value="없음">트레이너</option>
          <option value="kim">Kim</option>
          <option value="park">Park</option>
          <option value="lee">Lee</option>
        </select>
        <input type="submit" value="회원 등록" />
      </form>
    </>
  );
};

const UserTable = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);

  const fetchUsers = async () => {
    const response = await UserApi.getUserAll();
    console.log(response);
    console.log(response.data);

    const users = response.data;

    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [loading]);

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
              <td>{user.trainer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export const Trainer = () => {
  return (
    <>
      <UserForm />
      <UserTable />
    </>
  );
};

export default Trainer;
