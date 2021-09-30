import { combineReducers } from "redux";
import {SORT_VOTERS_ACTION,REFRESH_ELECTIONS_DONE_ACTION,REFRESH_VOTERS_DONE_ACTION} from  "./../actions/mainMenuActions"

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

export const votingAppReducer = combineReducers({
    voters: voterReducer,
    voterSort : voterSortReducer
})

