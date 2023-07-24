import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axios = Axios.create({
    baseURL: "/test",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => status < 500,
});

function App() {
    const navigation = useNavigate();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("/data");
            console.log(data);
            if (data?.loggedIn) return;
            navigation("/login");
        })();
    }, []);

    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default App;
