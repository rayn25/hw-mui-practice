import { createReducer } from 'typesafe-actions';
import { LoginState, LoginAction } from './types';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LoginAsync } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from 'lib/reducerUtils';

const initialState: LoginState = {
    User: asyncState.initial(),
};

/*
const login = createReducer<LoginState, LoginAction>(initialState, {
    [LOGIN]: (state) => ({
        ...state,
        User: asyncState.load(),
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        User: asyncState.success(action.payload),
    }),
    [LOGIN_ERROR]: (state, action) => ({
        ...state,
        User: asyncState.error(action.payload),
    }),
});
*/

const login = createReducer<LoginState, LoginAction>(initialState).handleAction(
    //    [LoginAsync.request, LoginAsync.success, LoginAsync.failure],
    transformToArray(LoginAsync),
    createAsyncReducer(LoginAsync, 'User'),
);

export default login;
