import { USER_ACTIONS } from "../constants/user";

const initialState = {
    name: "",
    userId: null,
    error: "",
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTIONS.UPDATE_NAME: {
            return { ...state, name: action.payload };
        }
        case USER_ACTIONS.FETCH_USER: {
            return action.payload
        }
        case USER_ACTIONS.FETCH_USER_ERROR: {
            // console.log("ERROR FETCHING USER ", action.msg)
            return { ...state, error: action.msg }
        }
        case USER_ACTIONS.CREATE_USER: {
            return action.payload
        }
        case USER_ACTIONS.CREATE_USER_ERROR: {
            console.log("ERROR CREATING USER ", action.msg)
            return { ...state, error: action.msg }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;