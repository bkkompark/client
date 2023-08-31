const CustomerDetail = ({ userId, user, isOpen, closeModal }: any) => {
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

export default CustomerDetail;
