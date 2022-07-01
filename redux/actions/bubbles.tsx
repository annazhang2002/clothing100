import { BUBBLES_ACTIONS } from "../constants/bubbles";
import { firebase } from '../../config';
import { Dispatch } from 'redux';
import { Bubble } from "../../types";

const bubbleRef = firebase.firestore().collection('bubbles')

export const createBubble = (newBubble: Bubble) => {
    return (dispatch: Dispatch) => {
        return bubbleRef.add(newBubble)
            .then(res => {
                console.log("RES", res)
                console.log("RES.ID", res.id)
                dispatch(
                    { type: BUBBLES_ACTIONS.CREATE_BUBBLE, payload: { bubble: newBubble, id: res.id } }
                )
            })
            .catch(err => dispatch(
                { type: BUBBLES_ACTIONS.CREATE_BUBBLE_ERROR, msg: err }))
    }
}
