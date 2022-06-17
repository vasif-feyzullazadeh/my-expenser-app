import { User, UserAction, UserState } from './../../types/user';

const defaultState: UserState = {
    data: {} as User,
    loading: false,
    error: ""
}

const userReducer = (state: UserState, action: UserAction) => {
    return state;
}

export default userReducer;




// reducer: bir funksiyadir State Action ve Parametri alir ve axirda state qaytarir 