import { useState, useEffect } from "react";
import TrainerApi from "../api/TrainerApi";

interface TableBodyProps {
  users: any[];
}

const TableBody = ({ users }: TableBodyProps) => {
  const handleGrantTrainer = async (userId: any) => {
    const { data } = await TrainerApi.allowTrainer(userId);
    console.log(data);
  };

  return (
    <>
      <tbody>
        {users.map((user: any) => (
          <tr>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>{user.role}</td>
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
