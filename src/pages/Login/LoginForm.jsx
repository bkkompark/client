import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const LoginForm = ({ type, setUser }) => {
    const [values, handleChange, handleSubmit] = useForm({ id: "", password: "" }, async (obj) => {
        const data = await (
            await fetch("/api/trainer/login", {
                method: "POST",
                body: JSON.stringify(obj),
                headers: { "Content-Type": "application/json" },
            })
        ).json();
        setUser(data);
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
