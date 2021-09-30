import { createStore } from "redux"
import { votingAppReducer } from "../reducers/votingAppReducers"

export const votingAppStore = createStore(
    votingAppReducer
)