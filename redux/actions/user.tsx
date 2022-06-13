import { USER_ACTIONS } from "../constants/user";
import { firebase } from '../../config';
import { Dispatch } from 'redux';
import { User } from "../../types";

import { testUser } from '../../constants/testObjects'

const userRef = firebase.firestore().collection('users')

export const updateName = (newName: String, id: String) => {
    userRef.doc(id.toString()).update({ name: newName }).then(() => {
        console.log("updated name")
    }
    )
    return {
        type: USER_ACTIONS.UPDATE_NAME,
        payload: newName
    }
}

export const createUser = (id: String, user: User) => {
    return (dispatch: Dispatch) => {
        return userRef.doc(id.toString()).set(user)
            .then(_ => {
                console.log("success creating user")
                dispatch({ type: USER_ACTIONS.CREATE_USER, payload: user })
            })
            .catch(err => {
                dispatch({ type: USER_ACTIONS.CREATE_USER_ERROR, msg: id + ": " + err })
            })
    }
}

export const fetchUser = (id: String) => {
    return (dispatch: Dispatch<any>) => {
        return userRef.doc(id.toString()).get()
            .then(doc => {
                console.log("fetched user")
                dispatch({ type: USER_ACTIONS.FETCH_USER, payload: doc.data() })
            })
            .catch(err => {
                // make the user if there is no user
                // TODO will need to be fixed in the future
                dispatch(createUser(id, testUser))
                dispatch({ type: USER_ACTIONS.FETCH_USER_ERROR, msg: id + ": " + err })
            })
    }
}