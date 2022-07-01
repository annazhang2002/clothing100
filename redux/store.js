import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from './reducers/user';
import bubblesReducer from './reducers/bubbles';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const rootReducer = combineReducers(
    { user: userReducer, bubbles: bubblesReducer },
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middlewares));
}

export default configureStore;