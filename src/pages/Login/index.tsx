import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useState } from "react";
import Trainers from "../Trainers";
import Manager from "../Manager";

const Login = () => {
    const [user, setUser] = useState<any>();
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    return (
        <>
            {user ? (
                <>
                    {type === "Trainer" && <Trainers user={user} />}
                    {type === "Manager" && <Manager user={user} />}
                </>
            ) : (
                <LoginForm
                    type={type}
                    setUser={setUser}
                />
            )}
        </>
    );
};

export default Login;
