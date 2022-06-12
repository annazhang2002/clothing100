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
        case USER_ACTIONS.FETCH_USER_ERROR: {
            console.log("ERROR FETCHING USER: ", action.msg)
            return { ...state, error: action.msg }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;