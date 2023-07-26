import { useEffect, useState } from "react";

interface UserProps {
  users: any[];
}

const UserDetail = ({ users }: UserProps) => {
  return (
    <>
      {users.map((user: any) => (
        <div key={user.id}>
          <h2>{user.name}님의 상세 정보</h2>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
        </div>
      ))}
    </>
  );
};

export default UserDetail;
