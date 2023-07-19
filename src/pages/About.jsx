import { useForm } from "../hooks/useForm";
import { getData } from "../util/getData";

const errorChecking = (value) => {
    const error = {};

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i.test(value.password)) {
        error.password = "아이디는 문자, 숫자, 특수문자가 모두 포함 되어야 하고 8자리 이상이어야 합니다.";
    }

    Object.keys(value).map((key) => {
        if (value[key] === "" || value[key] === 0) error[key] = `입력되지 않았습니다.`;
    });

    return error;
};

const About = () => {
    const [values, handleChange, handleSubmit, error] = useForm(
        { id: "", password: "" },
        (value) => {
            console.log(value);
        },
        errorChecking
    );
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div style={{ color: "red" }}>{error.id}</div>
                <input
                    style={error.id ? { outline: "red", borderColor: "red" } : {}}
                    type="id"
                    name="id"
                    onChange={handleChange}
                />
                <div style={{ color: "red" }}>{error.password}</div>
                <input
                    style={error.password ? { outline: "red", borderColor: "red" } : {}}
                    type="id"
                    name="password"
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    value="로그인"
                />
            </form>
        </>
    );
};

export default About;
