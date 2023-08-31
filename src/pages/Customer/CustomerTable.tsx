import { useEffect, useState } from "react";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";
import CustomerDetail from "./CustomerDetail";

// 1. loading, users, isModalOpen 세 개의 상태 변수를 useState를 사용해 초기화
const CustomerTable = ({ trainers }: any) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // 2. openModal, closeModal, fetchUsers 함수를 정의
  // const openModal = () => setIsModalOpen(true); // 모달 창을 열기 위한 함수
  const closeModal = () => setIsModalOpen(false);
  const openModalForUser = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  // 서버에서 회원 목록 데이터를 가져오는 비동기 함수
  const fetchUsers = async () => {
    const response = await CustomerApi.getCustomerAll(); // 회원 목록 데이터를 요청
    const users = response.data; // 응답 데이터를 users 상태 변수에 저장하고,

    setUsers(users);
    setLoading(false); // loading 상태를 false로 변경하여 데이터 로딩이 완료되었음을 나타냄. 이 함수는 컴포넌트가 처음 렌더링되거나 loading 상태가 변경될 때 호출된다.
  };

  // 3. useState 훅을 사용해 데이터 로딩
  useEffect(() => {
    fetchUsers(); // fetchUsers 함수를 호출한다. 얘는 컴포넌트가 렌더링되거나 loading 상태가 변경될 때마다 실행된다.
  }, [loading]); // 또한 초기 렌더링 시에도 실행되기 때문에 컴포넌트가 화면에 나타날 때 회원 목록 데이터를 가져온다.

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>회원 목록</h1>
        <table style={{ marginRight: "30px" }}>
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
                  <button onClick={() => openModalForUser(user.id)}>
                    more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUserId !== null && (
        <CustomerDetail
          userId={selectedUserId}
          user={users.find((user: any) => user.id === selectedUserId)}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default CustomerTable;
