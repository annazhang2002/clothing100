import { EXCHANGE_ACTIONS } from "../constants/exchange";
var _ = require('lodash');

const initialState = {
    exchangesById: {},
    exchangesIds: [],
    error: ''
};

const exchangeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case EXCHANGE_ACTIONS.CREATE_EXCHANGE: {
            const id = action.payload.id
            const exchange = action.payload.exchange
            return { ...state, exchangeById: _.set(state.exchangesById, id, exchange), exchangesIds: _.concat([id], state.exchangesIds) };
        }
        case EXCHANGE_ACTIONS.CREATE_EXCHANGE_ERROR: {
            console.log("ERROR CREATING EXCHANGE: ", action.msg)
            return { ...state, error: action.msg }
        }
        default: {
            return state;
        }
    }
}

export default exchangeReducer;