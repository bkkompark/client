import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState<any>();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

    return (
        <>
            {user ? (
                <></>
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
