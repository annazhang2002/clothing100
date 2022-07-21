import { firebase } from '../../config';
import { Dispatch } from 'redux';
import { Clothing, ClothesById } from '../../types';
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

export const fetchClothes = (count: number) => {
    return (dispatch: Dispatch) => {
        return clothesRef.where('available', '==', true).limit(count)
            // return clothesRef.where('available', '==', true).orderBy('date', 'desc').limit(count)
            .onSnapshot(
                (querySnapshot: any) => {
                    console.log(querySnapshot)
                    const clothesById: ClothesById = {}
                    const clothesIds: Array<String> = []
                    querySnapshot.forEach((doc: any) => {
                        const clothingData = doc.data();
                        const clothingId = doc.id;
                        clothesIds.push(clothingId);
                        clothesById[clothingId] = clothingData
                    });
                    // console.log(bubblesById)
                    // console.log(bubblesIds)
                    dispatch({ type: CLOTHING_ACTIONS.FETCH_CLOTHING, payload: { clothesById, clothesIds } })
                },
                (err: any) => {
                    console.log("ERROR FETCHING CLOTHING")
                    dispatch({ type: CLOTHING_ACTIONS.FETCH_CLOTHING_ERROR, msg: err })
                }
            )
    }
}
