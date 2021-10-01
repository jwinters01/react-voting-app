import { combineReducers } from "redux";
import { REFRESH_ELECTIONS_DONE_ACTION, SET_ERROR_ACTION, RESET_ERROR_ACTION } from "../actions/mainMenuActions";

const DEFAULT_ERROR_STATE=""

export const electionsReducer = (elections=[], action) => {
    switch (action.type) {
        case REFRESH_ELECTIONS_DONE_ACTION:
            return action.elections
        default:
            return elections
    }
}

export const errorReducer = (error=DEFAULT_ERROR_STATE, action) => {
    switch (action.type) {
        case SET_ERROR_ACTION:
            return action.message
        case RESET_ERROR_ACTION:
            return DEFAULT_ERROR_STATE
        default:
            return error
    }
}

export const votingAppReducer = combineReducers({
    elections: electionsReducer,
    error: errorReducer
})