import { combineReducers } from "redux";
import { SORT_VOTERS_ACTION, REFRESH_VOTERS_DONE_ACTION, REFRESH_ELECTIONS_DONE_ACTION, SET_ERROR_ACTION, RESET_ERROR_ACTION, SET_ACTIVE_BALLOT_ACTION, RESET_ACTIVE_BALLOT_ACTION } from "../actions/mainMenuActions";

const DEFAULT_ERROR_STATE=""
const DEFAULT_ACTIVE_BALLOT=-1

export const voterSortReducer = (votersSort = { col: 'id', dir: 'asc' }, action) => {
  if (action.type === SORT_VOTERS_ACTION) {
    if (action.col === votersSort.col) {
      return { col: votersSort.col, dir: votersSort.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      return { col: action.col, dir: 'asc' };
    };
  }

  return votersSort;
};

export const voterReducer  = (voters = [], action) => {

  switch (action.type) {
    case  REFRESH_VOTERS_DONE_ACTION:
      return action.voters
    default:
      return voters;
  }
};

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

export const activeBallotReducer = (id=DEFAULT_ACTIVE_BALLOT, action) => {
  switch(action.type) {
    case SET_ACTIVE_BALLOT_ACTION:
      return action.id
    case RESET_ACTIVE_BALLOT_ACTION:
      return DEFAULT_ACTIVE_BALLOT
    default:
      return id
  }
}

export const votingAppReducer = combineReducers({
    elections: electionsReducer,
    activeBallot: activeBallotReducer,
    error: errorReducer,
    voters: voterReducer,
    voterSort : voterSortReducer
})

