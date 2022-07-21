import { CLOTHING_ACTIONS } from "../constants/clothes";

var _ = require('lodash');

const initialState = {
    clothesById: {},
    clothesIds: [],
    error: ''
};

const clothesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CLOTHING_ACTIONS.ADD_CLOTHING: {
            const id = action.payload.id
            const item = action.payload.item
            return { ...state, clothesById: _.set(state.clothesById, id, item), clothesIds: _.concat([id], state.clothesIds) };
        }
        case CLOTHING_ACTIONS.ADD_CLOTHING_ERROR: {
            console.log("ERROR ADDING CLOTHING: ", action.msg)
            return { ...state, error: action.msg }
        }
        case CLOTHING_ACTIONS.FETCH_CLOTHING: {
            return { ...state, clothesById: action.payload.clothesById, clothesIds: action.payload.clothesIds }
        }
        case CLOTHING_ACTIONS.FETCH_CLOTHING_ERROR: {
            console.log("ERROR FETCHING BUBBLES: ", action.msg)
            return { ...state, error: action.msg }
        }
        default: {
            return state;
        }
    }
}

export default clothesReducer;