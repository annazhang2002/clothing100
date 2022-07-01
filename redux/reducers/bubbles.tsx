import { BUBBLES_ACTIONS } from "../constants/bubbles";
import _ from 'lodash'

const initialState = {
    bubblesById: {},
    bubblesIds: [],
    error: ''
};

const bubblesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case BUBBLES_ACTIONS.CREATE_BUBBLE: {
            const id = action.payload.bubble.id
            const bubble = action.payload.bubble
            return { ...state, bubblesById: _.set(state.bubbles, id, bubble), bubblesIds: _.concat([id], state.bubblesIds) };
        }
        case BUBBLES_ACTIONS.CREATE_BUBBLE_ERROR: {
            console.log("ERROR CREATING BUBBLE: ", action.msg)
            return { ...state, error: action.msg }
        }
        default: {
            return state;
        }
    }
}

export default bubblesReducer;