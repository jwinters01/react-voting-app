import { combineReducers } from "redux";

import {SORT_VOTERS_ACTION,REFRESH_ELECTIONS_DONE_ACTION,REFRESH_VOTERS_DONE_ACTION,EDIT_VOTER_ACTION,CANCEL_VOTER_ACTION,SET_ERROR_ACTION, RESET_ERROR_ACTION, INPUT_VOTER_ID_ACTION} from  "./../actions/mainMenuActions"

const DEFAULT_ERROR_STATE=""

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
export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([
    REFRESH_VOTERS_DONE_ACTION, CANCEL_VOTER_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editVoterId;

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

export const voterIdReducer = (voterId=-1, action) => {
  if (action.type === INPUT_VOTER_ID_ACTION) {
    return action.voterId;
  } else {
    return voterId;
  }
}

export const votingAppReducer = combineReducers({
    elections: electionsReducer,
    error: errorReducer,
    voters: voterReducer,
    voterSort : voterSortReducer,

    voterId: voterIdReducer,

    editVoterId: editVoterIdReducer,

})

