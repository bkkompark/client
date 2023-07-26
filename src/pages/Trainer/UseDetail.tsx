import { useEffect, useState } from "react";

interface UserProps {
  user: any;
}

const UserDetail = ({ user }: UserProps) => {
  return (
    <>
      <div key={user.id}>
        <h2>{user.name}님의 상세 정보</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>{user.role}</p>
      </div>
    </>
  );
};

export default UserDetail;
