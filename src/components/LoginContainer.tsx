import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'reducer';
import Login from 'pages/Login';
import { LoginThunk, LoginAsync } from 'login';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

export default function LoginContainer() {
    const { loading, data, error } = useSelector((state: RootState) => state.login.User);
    const dispatch = useDispatch<any>();

    const onSubmitLogin = (id: string, password: string) => {
        const params = {
            id: id,
            password: password,
        };
        // dispatch(LoginThunk(params));
        dispatch(LoginAsync.request(params));
    };

    return (
        <>
            <Login onSubmitLogin={onSubmitLogin} />
            {loading && <Loading />}
            {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
            {data && <Navigate to="/" />}
        </>
    );
}
