import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { UserApi } from "../../api";

const LoginForm = ({ type, setUser }) => {
    const [values, handleChange, handleSubmit] = useForm({ id: "", password: "" }, async (obj) => {
        const { username: name, password } = obj;
        const { data, status } = await UserApi.login(name, password);
        console.log(status, data);
    });
    return (
        <form onSubmit={handleSubmit}>
            <h1>{type} 로그인</h1>
            <input
                type="id"
                name="username"
                placeholder="ID"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="PassWord"
                onChange={handleChange}
            />
            <input
                type="submit"
                value="로그인"
            />
            <div>
                <Link to="/login?type=Manager">Manager Login &rarr;</Link>
                <br />
                <Link to="/login?type=Trainer">Trainer Login &rarr;</Link>
            </div>
        </form>
    );
};

export default LoginForm;
