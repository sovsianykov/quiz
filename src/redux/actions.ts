import {CardActionTypes} from "./constants";
import {Verb} from "../content/verbs";


export const GetVerbsAction = () => {
    return {
        type: CardActionTypes.GET_VERBS
    };
}
export const CheckAnswerAction = (array:Verb[]) => {
    return {
        type: CardActionTypes.CHECK_ANSWER,
        payload : array
    };
}
export const CorrectAnswerAction = (answer:boolean) => {
    return {
        type: CardActionTypes.CHECK_ANSWER,
        payload : answer
    };
}
