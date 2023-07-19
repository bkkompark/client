import React, { useEffect, useState } from "react";

type UseForm<T> = {
    initialState: T;
    callbackFn: (values: T) => Promise<void>;
};

/**
 *
 * @param initialState input의 name 을 key로 하는 오브젝트
 * @param callbackFn submit시 실행할 콜백 함수 (initialState) =>
 * @param errorChecking error 를 체킹할 함수 (initialState) => error
 * @returns
 */
export const useForm = <T extends {}>(initialState: T, callbackFn: any, errorChecking?: any): [T, React.ChangeEventHandler, React.FormEventHandler, T] => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState<any>({});
    const [request, setRequest] = useState<Boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        if (errorChecking) setError(errorChecking(values));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (request) callbackFn(values);
    };

    useEffect(() => {
        if (Object.keys(error) && Object.keys(error).length === 0) {
            setRequest(true);
        }
    }, [error]);

    return [values, handleChange, handleSubmit, error];
};
