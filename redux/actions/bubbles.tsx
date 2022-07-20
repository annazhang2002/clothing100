import { BUBBLES_ACTIONS } from "../constants/bubbles";
import { firebase } from '../../config';
import { Dispatch } from 'redux';
import { Bubble, BubblesById } from "../../types";

const bubbleRef = firebase.firestore().collection('bubbles')

export const createBubble = (newBubble: Bubble) => {
    console.log("-----------CREATING BUBBLES----------")
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

export const fetchBubbles = (userId: String) => {
    return (dispatch: Dispatch) => {
        console.log("-----------FETCHING BUBBLES----------")
        return bubbleRef.where('userIds', 'array-contains', userId).orderBy('name', 'desc')
            .onSnapshot(
                (querySnapshot: any) => {
                    const bubblesById: BubblesById = {}
                    const bubblesIds: Array<String> = []
                    querySnapshot.forEach((doc: any) => {
                        const bubbleData = doc.data();
                        const bubbleId = doc.id;
                        bubblesIds.push(bubbleId);
                        bubblesById[bubbleId] = bubbleData
                    });
                    console.log(bubblesById)
                    console.log(bubblesIds)
                    dispatch({ type: BUBBLES_ACTIONS.FETCH_BUBBLES, payload: { bubblesById, bubblesIds } })
                },
                (err: any) => {
                    dispatch({ type: BUBBLES_ACTIONS.FETCH_BUBBLES_ERROR, msg: err })
                }
            )
    }
}
