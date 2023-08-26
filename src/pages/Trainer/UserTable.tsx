import { useEffect, useState } from "react";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";

const UserDetail = ({ users, isOpen, closeModal }: any) => {
  // 부모로부터 받을 수 있는 props
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        {users.map((user: any) => (
          <span key={user.id}>
            회원 상세 정보
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <p>성별: {user.gender}</p>
            <p>번호: {user.phone}</p>
            <p>주소: </p>
            <p>가입 경로: </p>
          </span>
        ))}
        <button onClick={closeModal}>X</button>
      </div>
    </>
  );
};

const UserTable = ({ trainers }: any) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchUsers = async () => {
    const response = await CustomerApi.getCustomerAll();
    // console.log(response);
    // console.log(response.data);
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
          columns={["id", "name", "age", "gender", "phone", "trainer", ""]}
        />
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.trainer ? user.trainer.name : ""}</td>
              <td>
                <button onClick={openModal}>more</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserDetail users={users} isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default UserTable;
