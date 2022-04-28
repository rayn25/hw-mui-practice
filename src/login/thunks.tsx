// import { ThunkAction } from 'redux-thunk';
// import { RootState } from 'reducer';
// import { LoginAction } from './types';
import { login } from 'api/login';
import { LoginAsync } from './actions';
import CreateAsyncThunk from 'lib/createAsyncThunk';

/*
export function LoginThunk(
    id: string,
    password: string,
): ThunkAction<void, RootState, null, LoginAction> {
    return async (dispatch) => {
        const { request, success, failure } = LoginAsync;
        dispatch(request());
        try {
            const User = await Login(id, password);
            dispatch(success(User));
        } catch (e: any) {
            dispatch(failure(e));
        }
    };
}
*/

export const LoginThunk = CreateAsyncThunk(LoginAsync, login);
