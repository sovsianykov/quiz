import {CardActionTypes} from "./constants";
import { Verb } from "../content/verbs";


export const GetVerbsAction = () => {
    return {
        type: CardActionTypes.GET_VERBS
    };
}
export const ChangeScoreAction = (value: number) => {
    console.log(value)
    return {
        type: CardActionTypes.CHANGE_SCORE,
        payload: value
    };
}
// export const CheckAnswerAction = (array:Verb[]) => {
//     return {
//         type: CardActionTypes.CHECK_ANSWER,
//         payload : array
//     };
// }
export const CorrectAnswerAction = (id:number ,array:Verb) => {
    return {
        type: CardActionTypes.CHECK_ANSWER,
        payload : array,
        payloadId: id
    };
}
