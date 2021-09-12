import { combineReducers } from "redux";
import { authReducer } from "./AuthReducers";
import { bankingReducer } from "./BankingReducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    banking: bankingReducer,
});
