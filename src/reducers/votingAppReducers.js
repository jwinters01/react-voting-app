import { combineReducers } from "redux";
import {SORT_VOTERS_ACTION} from  "./../actions/mainMenuActions"

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

export const votingAppReducer = combineReducers({
    
})

