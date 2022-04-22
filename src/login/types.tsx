import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { User } from '../api/login';
import { AsyncState } from '../lib/reducerUtils';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
    /*User: {
        loading: boolean;
        error: Error | null;
        data: User | null;
    };*/
    User: AsyncState<User, Error>;
};
