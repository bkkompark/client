import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { UserApi } from "../../api";

const LoginForm = () => {
    const navigation = useNavigate();

    const useSubmit = async (obj) => {
        const { username: name, password } = obj;
        const { data } = await UserApi.login(name, password);
        if (data.role === "Admin" || data.role === "Trainer") navigation("/");
        console.log(data);
    };

    const [, handleChange, handleSubmit] = useForm({ id: "", password: "" }, useSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <h1> 로그인</h1>
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
        </form>
    );
};

export default LoginForm;
