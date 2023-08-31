import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/customer">회원</Link>&nbsp;
      <Link to="/trainer">트레이너</Link>&nbsp;
      <Link to="/admin">관리자</Link>&nbsp;
      <Link to="/logout">logout</Link>&nbsp;
    </>
  );
};

export default Nav;
