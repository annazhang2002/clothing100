import { USER_ACTIONS } from "../constants/user";
import { firebase } from '../../config';

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
    let user

    userRef
        .doc(id.toString()).get().then((doc) => {
            user = doc.data()
            console.log(user)
            return {
                type: USER_ACTIONS.FETCH_USER,
                payload: user
            }
        })
        .catch((error) => { console.log("ERROR FETCHING USER: " + error); })

    return {
        type: USER_ACTIONS.FETCH_USER,
        payload: 'ERROR'
    }

}