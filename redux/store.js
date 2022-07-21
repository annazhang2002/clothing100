import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from './reducers/user';
import bubblesReducer from './reducers/bubbles';
import thunk from 'redux-thunk';
import exchangeReducer from "./reducers/exchange";
import clothesReducer from "./reducers/clothes";

const middlewares = [thunk];

const rootReducer = combineReducers(
    { user: userReducer, bubbles: bubblesReducer, exchange: exchangeReducer, clothes: clothesReducer },
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middlewares));
}

export default configureStore;