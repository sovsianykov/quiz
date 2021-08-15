import { combineReducers } from "redux";
import verbsReducer from "./verbsReducer";

export const rootReducer = combineReducers({
    verbsReducer : verbsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

