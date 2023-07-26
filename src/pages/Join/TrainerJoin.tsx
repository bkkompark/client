import { useForm } from "../../hooks/useForm";

import { JoinObject } from "../../api/UserApi";

export type JoinErrorObject = {
    name?: string;
    password?: string;
    passwordConfirm?: string;
    gender?: "남자" | "여자";
    age?: number;
    phone?: string;
    email?: string;
};

const errorChecking = (value: JoinObject) => {
    const error: JoinErrorObject = {};

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i.test(value.password)) {
        error.password = "비밀번호는 문자, 숫자, 특수문자가 모두 포함 되어야 하고 8자리 이상이어야 합니다.";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value.email)) {
        error.email = "이메일 형식에 맞지 않습니다.";
    }

    if (!/^010-\d{4}-\d{4}$/i.test(value.phone)) {
        error.phone = "번호 형식은 010-0000-0000 이어야 합니다.";
    }

    if (value.password !== value.passwordConfirm) {
        error.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    (Object.keys(value) as Array<keyof JoinObject>).map((key) => {
        if (value[key] === "" || value[key] === 0) (error[key] as any) = `입력되지 않았습니다.`;
    });

    return error;
};

const TrainerJoin = ({ type }: { type: string | null }) => {
    const [values, handleChange, handleSubmit, error] = useForm<JoinObject>(
        {
            name: "",
            password: "",
            passwordConfirm: "",
            gender: "남자",
            age: 0,
            phone: "",
            email: "",
        },
        async (a: any) => {
            console.log(a);
            console.log(error);
            // const { data } = await UserApi.join(values);
            // console.log(data);
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            <h1>{type} 회원가입</h1>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <input
                type="name"
                name="name"
                placeholder="NAME"
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="PassWord"
                onChange={handleChange}
            />
            <input
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
                onChange={handleChange}
            />
            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
            />

            <div>
                <label>
                    남자
                    <input
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    여자
                    <input
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={handleChange}
                    />
                </label>
            </div>

            <input
                type="submit"
                value="회원 가입"
            />
        </form>
    );
};

export default TrainerJoin;
