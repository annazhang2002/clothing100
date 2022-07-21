import { firebase } from '../../config';
import { Dispatch } from 'redux';
import { Clothing } from '../../types';
import { CLOTHING_ACTIONS } from '../constants/clothes';

const clothesRef = firebase.firestore().collection('clothes')

export const addClothing = (newItem: Clothing) => {
    return (dispatch: Dispatch) => {
        return clothesRef.add(newItem)
            .then(res => {
                dispatch(
                    { type: CLOTHING_ACTIONS.ADD_CLOTHING, payload: { newItem, id: res.id } }
                )
            })
            .catch(err => dispatch(
                { type: CLOTHING_ACTIONS.ADD_CLOTHING_ERROR, msg: err }))
    }
}
