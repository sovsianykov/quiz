import { verbs, VerbsState} from "../content/verbs";
import { CardActionTypes, VerbsAction } from "./constants";


const InitialState: VerbsState = {
    cards : verbs,
    score: 0,
}
const verbsReducer = (state= InitialState, action:VerbsAction) => {
    switch (action.type ) {
        case CardActionTypes.GET_VERBS: return state.cards;
        case CardActionTypes.CHECK_ANSWER: return {
            ...state,
            cards: action.payload
        };
        case CardActionTypes.TRY_AGAIN: return {
            ...state,
            cards: action.payload
        };
        case CardActionTypes.CHANGE_SCORE: return {
            ...state,
            score: action.payload
        };
        default : return state;

    }
}
export default verbsReducer;
