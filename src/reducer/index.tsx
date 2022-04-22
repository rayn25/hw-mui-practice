import { combineReducers } from 'redux';
import login from '../login';
import { all } from 'redux-saga/effects';
import { loginSaga } from '../login/sagas';

const rootReducer = combineReducers({
    login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
    yield all([loginSaga()]);
}
