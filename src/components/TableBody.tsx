import TrainerApi from "../api/TrainerApi";

interface TableBodyProps {
  users: any[];
}

const handleGrantTrainer = async (userId: any) => {
  const { data } = await TrainerApi.allowTrainer(userId);
  console.log(data);
};

const TableBody = ({ users }: TableBodyProps) => {
  return (
    <>
      <tbody>
        {users.map((user: any) => (
          <tr key={user.id}>
            {Object.values(user).map((value: any, index) => (
              <td key={index}>{value}</td>
            ))}
            {user.role === "Trainer" ? (
              <td></td>
            ) : (
              <td>
                <button onClick={() => handleGrantTrainer(user.id)}>
                  권한 부여
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableBody;
