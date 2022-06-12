import { USER_ACTIONS } from "../constants/user";
import { firebase } from '../../config';
import { Dispatch } from 'redux';

const userRef = firebase.firestore().collection('users')

export const updateName = (newName: String, id: Number) => {
    userRef.doc(id.toString()).update({ name: newName }).then(() => {
        console.log("updated name")
    }
    )
    return {
        type: USER_ACTIONS.UPDATE_NAME,
        payload: newName
    }
}
export const fetchUser = (id: Number) => {
    return (dispatch: Dispatch) => {
        return userRef.doc(id.toString()).get()
            .then(doc => dispatch(
                { type: USER_ACTIONS.FETCH_USER, payload: doc.data() }))
            .catch(err => dispatch(
                { type: USER_ACTIONS.FETCH_USER_ERROR, msg: err }))
    }
}