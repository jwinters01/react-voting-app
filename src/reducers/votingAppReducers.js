import { combineReducers } from "redux";
import { REFRESH_ELECTIONS_DONE_ACTION } from "../actions/mainMenuActions";


export const electionsReducer = (elections=[], action) => {
    switch (action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.elections
        default:
            return elections
    }
}

export const votingAppReducer = combineReducers({
    elections: electionsReducer
})