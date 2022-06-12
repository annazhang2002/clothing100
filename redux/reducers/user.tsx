import { UPDATE_NAME } from "../constants/user";

const initialState = {
    name: "anna",
    id: 1,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NAME: {
            return { ...state, name: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default userReducer;