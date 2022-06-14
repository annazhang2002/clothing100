import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from './reducers/user';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const rootReducer = combineReducers(
    { user: userReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(...middlewares));
}

export default configureStore;