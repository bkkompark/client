import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { UserApi } from "../../api";

const LoginForm = () => {
    const navigation = useNavigate();

    const useSubmit = async (obj) => {
        const { email, password } = obj;
        const { data } = await UserApi.login(email, password);
        if (typeof data.role === typeof "") navigation("/");
        console.log(data);
    };

    const [, handleChange, handleSubmit] = useForm({ email: "", password: "" }, useSubmit);

    return (
        <form onSubmit={handleSubmit}>
            <h1> 로그인</h1>
            <input
                type="email"
                name="email"
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
