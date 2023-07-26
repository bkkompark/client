import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/trainer">Trainer</Link>&nbsp;
            <Link to="/admin">Admin</Link>&nbsp;
            <Link to="/logout">logout</Link>&nbsp;
        </>
    );
};

export default Nav;
