import TrainerApi from "../../api/TrainerApi";

const users = [
  {
    email: "my-email",
    name: "test",
    gender: "male",
    age: 12,
    phone: "010-0000-0000",
  },
  {
    email: "my-email22", // key
    name: "test2",
    gender: "female",
    age: 34,
    phone: "010-0000-0120",
  },
  {
    email: "my-email33", // key
    name: "test3",
    gender: "female",
    age: 55,
    phone: "010-0000-0120",
  },
  {
    email: "my-email44", // key
    name: "test4",
    gender: "male",
    age: 66,
    phone: "010-0000-0120",
  },
];

const UserDetail = ({
  username,
  gender,
  age,
  phone,
}: {
  username: string;
  gender: string;
  age: number;
  phone: string;
}) => {
  const targetUrl = `http://localhost:3000/trainer/${username}`;
  window.location.href = targetUrl;
  return (
    <>
      <h1>{username}</h1>
    </>
  );
};

export const Trainer = () => {
  return (
    <>
      <h1>회원 목록</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.email}>
              <td>{index + 1}</td>
              <td>
                <div
                  onClick={() =>
                    UserDetail({
                      username: user.name,
                      gender: user.gender,
                      age: user.age,
                      phone: user.phone,
                    })
                  }
                >
                  {user.name}
                </div>
              </td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Trainer;
