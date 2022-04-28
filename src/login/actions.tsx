import { createAsyncAction } from 'typesafe-actions';
import { User } from 'api/login';
import { AxiosError } from 'axios';

// 액션 타입을 선언
export const LOGIN = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_REQUEST_SUCCESS';
export const LOGIN_ERROR = 'login/LOGIN_REQUEST_ERROR';

// 액션 생성함수를 선언합니다
/*export const loginRequest = createStandardAction(LOGIN_REQUEST)();
export const loginRequestSuccess = createStandardAction(LOGIN_REQUEST_SUCCESS)<User>();
export const loginRequestError = createStandardAction(LOGIN_REQUEST_ERROR)<AxiosError>();*/

export const LoginAsync = createAsyncAction(LOGIN, LOGIN_SUCCESS, LOGIN_ERROR)<
    Object,
    User,
    AxiosError
>();
