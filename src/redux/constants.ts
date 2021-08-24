import { Verb } from "../content/verbs";


export enum CardActionTypes  {
     CHECK_ANSWER = "CHECK_ANSWER",
     TRY_AGAIN = "TRY_AGAIN",
     CHANGE_SCORE = "CHANGE_SCORE",
     RANDOMIZE = "RANDOMIZE",
     GET_VERBS = "GET_VERBS"
}
// interface CheckAnswerAction {
//  type: CardActionTypes.CHECK_ANSWER;
//  payload: number;
// }
interface TryAgainAction {
    type: CardActionTypes.TRY_AGAIN;
    payload: boolean;
}
interface GetVerbsAction {
    type: CardActionTypes.GET_VERBS;
}
interface ChangeScoreAction {
    type: CardActionTypes.CHANGE_SCORE;
    payload: number
//
}
interface  CorrectAnswerAction {
    type: CardActionTypes.CHECK_ANSWER;
    payload: Verb,
    payloadId: number

}

export type VerbsAction =
     | TryAgainAction | GetVerbsAction | ChangeScoreAction| CorrectAnswerAction ;



