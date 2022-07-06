import { firebase } from '../../config';
import { EXCHANGE_ACTIONS } from "../constants/exchange";
import { Dispatch } from 'redux';
import { Exchange } from "../../types";


const exchangeRef = firebase.firestore().collection('exchange')

export const createExchange = (newExchange: Exchange) => {
    return (dispatch: Dispatch) => {
        return exchangeRef.add(newExchange)
            .then(res => {
                console.log("RES", res)
                console.log("RES.ID", res.id)
                dispatch(
                    { type: EXCHANGE_ACTIONS.CREATE_EXCHANGE, payload: { exchange: newExchange, id: res.id } }
                )
            })
            .catch(err => dispatch(
                { type: EXCHANGE_ACTIONS.CREATE_EXCHANGE_ERROR, msg: err }))
    }
}
