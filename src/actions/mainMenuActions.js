export const SORT_VOTERS_ACTION = 'SORT_VOTERS';
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';


export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTER_REQUEST"
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE"


export const createRefreshVotersRequestAction = () => ({ type: REFRESH_VOTERS_REQUEST_ACTION });
export const createRefreshVotersDoneAction = (voters) => ({ type: REFRESH_VOTERS_DONE_ACTION, voters });


export const createSortVotersAction = (col) => ({ type: SORT_VOTERS_ACTION, col });
export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = (elections) => ({ type: REFRESH_ELECTIONS_DONE_ACTION, elections });


export const refreshVoters = () => {

  // this function being returned is the thunk action
  return dispatch => {

    dispatch(createRefreshVotersRequestAction());

    return fetch('http://localhost:3060/voters')
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
  };
};





export const refreshElections = () => {

    // this function being returned is the thunk action
    return dispatch => {
      dispatch(createRefreshElectionsRequestAction());
  
      return fetch('http://localhost:3060/elections')
        .then(res => res.json())
        .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
    };
  };
