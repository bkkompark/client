// isOpen 상태에 따라 모달 창을 열거나 닫는다. users 배열과 모달 창의 열림 여부를 props로 전달하여, 회원상세정보를 모달 창에서 표시한다.
// 부모로부터 받을 수 있는 props
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
