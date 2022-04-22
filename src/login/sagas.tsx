import { LoginAsync, LOGIN } from './actions';
import { login, User } from '../api/login';
import { call, put, takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../lib/createAsyncSaga';

/*
function* loginRequest(action: ReturnType<typeof LoginAsync.request>) {
    try {
        const User: User = yield call(login, action.payload);
        yield put(LoginAsync.success(User));
    } catch (e: any) {
        yield put(LoginAsync.failure(e));
    }
}
 */

const loginRequest = createAsyncSaga(LoginAsync, login);

export function* loginSaga() {
    yield takeEvery(LOGIN, loginRequest);
}
