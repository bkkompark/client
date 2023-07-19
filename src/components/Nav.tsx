import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/join?type=Trainer">Join</Link>&nbsp;
            <Link to="/login?type=Trainer">Login</Link>&nbsp;
        </>
    );
};

export default Nav;
