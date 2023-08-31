import { useEffect, useState } from "react";
import { CustomerApi } from "../../api";
import TableHeader from "../../components/TableHeader";
import CustomerDetail from "./CustomerDetail";

const CustomerTable = ({ trainers }: any) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const closeModal = () => setIsModalOpen(false);
  const openModalForUser = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const fetchUsers = async () => {
    const response = await CustomerApi.getCustomerAll();
    const users = response.data;

    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [loading]);

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
