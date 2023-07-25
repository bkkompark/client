import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../api";

export default () => {
    const navigate = useNavigate();
    const func = async () => {
        console.log(await UserApi.logout());
    };

    useEffect(() => {
        func();
        navigate("/login");
    }, []);

    return <></>;
};
