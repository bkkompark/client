import { useState, useEffect } from "react";
import TrainerApi from "../api/TrainerApi";

interface TableBodyProps {
  users: any[];
  onRefresh: any;
}

const handleGrantTrainer = async (userId: any, onRefresh: any) => {
  const { data } = await TrainerApi.allowTrainer(userId);
  console.log(data);
  setTimeout(() => {
    onRefresh();
    console.log("완료");
  }, 100);
};

const TableBody = ({ users, onRefresh }: TableBodyProps) => {
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
                <button onClick={() => handleGrantTrainer(user.id, onRefresh)}>
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
