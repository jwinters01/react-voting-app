import { applyMiddleware, createStore } from "redux"
import { votingAppReducer } from "../reducers/votingAppReducers"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

let composeEnhancers = composeWithDevTools({
    name: 'Voting App'
  });

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
    middleware = composeEnhancers(middleware);
}

export const votingAppStore = createStore(
    votingAppReducer,
    middleware
)