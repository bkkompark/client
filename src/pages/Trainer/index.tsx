import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { TrainerApi, UserApi } from "../../api";

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

export type enrollObject =
  | {}
  | {
      name: string;
      gender: "남자" | "여자";
      age: number;
      phone: string;
    };

const UserForm = () => {
  const fn = async () => {
    const res = await fetch(`/api/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json", // content가 json 파일
      },
      body: JSON.stringify({ email: "aa@naver.com", password: "1212" }),
    });
    console.log(await res.json());

    // const response = await fetch(`/trainers`, {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log("fetch ", response);
    // // console.log(await response.json()); // fetch
    // const res = await TrainerApi.getTrainerAll(); // axios
    // console.log("axios ", res);
  };
  useEffect(() => {
    fn();
  });

  // const [values, handleChange, handleSubmit, error] = useForm<
  //   enrollObject | {}
  // >({}, async (a: any) => {
  //   console.log(a);

  //   const { data } = await UserApi.join(values);
  //   console.log(data);
  // });

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <h1>회원 등록</h1>
        <input type="" name="name" placeholder="NAME" onChange={handleChange} />
        <input
          type=""
          name="gender"
          placeholder="GENDER"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="AGE"
          onChange={handleChange}
        />
        <input
          type=""
          name="phone"
          placeholder="PHONE"
          onChange={handleChange}
        />
        <input type="submit" value="회원 등록" />
      </form> */}
    </>
  );
};

const UserTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleBtnClicked = (userId: any) => {
    // 버튼을 클릭하면 선택한 사용자의 id를 상태에 저장
    setSelectedUser(userId);
  };

  return (
    <>
      <h1>회원 목록</h1>
      <table>
        <TableHeader columns={["email", "name", "gender", "age", "phone"]} />
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
              <button onClick={() => handleBtnClicked(user.id)}>
                상세 정보
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserDetail user={users.find((user) => user.id === selectedUser)} />
      )}
    </>
  );
};

export const Trainer = () => {
  return (
    <>
      <UserTable />
      <UserForm />
    </>
  );
};

export default Trainer;
