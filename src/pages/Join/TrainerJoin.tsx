import LinkJoin from "./LinkJoin";
import { useForm } from "../../hooks/useForm";
import { getData } from "../../util/getData";

//username, password, passwordConfirm, gender, age, phone

const TrainerJoin = ({ type }: { type: string | null }) => {
    const [values, handleChange, handleSubmit, error] = useForm({}, async (a: any) => {
        console.log(a);

        const data = getData(values);
    });
    return (
        <form onSubmit={handleSubmit}>
            <h1>{type} 회원가입</h1>
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
