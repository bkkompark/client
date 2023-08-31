import { useEffect, useState } from "react";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";

// isOpen 상태에 따라 모달 창을 열거나 닫는다. users 배열과 모달 창의 열림 여부를 props로 전달하여, 회원상세정보를 모달 창에서 표시한다.
const UserDetail = ({ userId, user, isOpen, closeModal }: any) => {
  // 부모로부터 받을 수 있는 props
  return (
    <>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <h1>상세 정보</h1>
        <ul key={userId}>
          <li>이름: {user.name}</li>
          <li>나이: {user.age}</li>
          <li>성별: {user.gender}</li>
          <li>번호: {user.phone}</li>
          <li>주소: </li>
          <li>가입 경로: </li>
        </ul>
        <button onClick={closeModal}>X</button>
      </div>
    </>
  );
};

const UserTable = ({ trainers }: any) => {
  // 1. loading, users, isModalOpen 세 개의 상태 변수를 useState를 사용해 초기화
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  // 2. openModal, closeModal, fetchUsers 함수를 정의
  // const openModal = () => setIsModalOpen(true); // 모달 창을 열기 위한 함수
  const closeModal = () => setIsModalOpen(false); // 모달 창을 닫기 위한 함수
  const openModalForUser = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const fetchUsers = async () => {
    // 서버에서 회원 목록 데이터를 가져오는 비동기 함수
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
                  {/* <button onClick={openModal}>more</button> */}
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
        <UserDetail
          userId={selectedUserId}
          user={users.find((user: any) => user.id === selectedUserId)}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
      {/* {users.map((user: any) => (
        <UserDetail
          userId={user.id}
          user={user}
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      ))} */}
    </div>
  );
};

export default UserTable;
