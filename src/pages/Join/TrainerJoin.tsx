import { useForm } from "../../hooks/useForm";
import { UserApi } from "../../api";
import { JoinObject } from "../../api/UserApi";

const TrainerJoin = ({ type }: { type: string | null }) => {
    const [values, handleChange, handleSubmit, error] = useForm<JoinObject | {}>({}, async (a: any) => {
        console.log(a);

        const { data } = await UserApi.join(values);
        console.log(data);
    });
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
                type=""
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
