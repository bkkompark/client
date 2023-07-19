import { useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";
import TrainerJoin from "./TrainerJoin";

const Join = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    return (
        <>
            <TrainerJoin type={type} />
        </>
    );
};

export default Join;
