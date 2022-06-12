import { USER_ACTIONS } from "../constants/user";

const initialState = {
    name: "anna",
    id: 1,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTIONS.UPDATE_NAME: {
            return { ...state, name: action.payload };
        }
        case USER_ACTIONS.FETCH_USER: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}

export default userReducer;