const trainers = [
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

export const Trainer = () => {
  return (
    <>
      <h1>트레이너 목록</h1>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>연락처</th>
            <th>권한</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((user, index) => {
            const authenticationURL = (user: any) => {
              const targetUrl = `http://localhost:8080/trainers/authentication/${user.email}`;
              window.location.href = targetUrl;
            };

            return (
              <tr key={user.email}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => authenticationURL(user.email)}>
                    권한 부여
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Trainer;
