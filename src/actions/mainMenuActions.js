
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const SET_ERROR_ACTION = 'SET_ERROR';
export const RESET_ERROR_ACTION = 'RESET_ERROR';

export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = (elections) => ({ type: REFRESH_ELECTIONS_DONE_ACTION, elections });

export const refreshElections = () => {
    // this function being returned is the thunk action
  return dispatch => {
    dispatch(createRefreshElectionsRequestAction());

    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
  };
};

export const createSetErrorAction = (message) => ({type: SET_ERROR_ACTION, message})
export const createResetErrorAction = () => ({type: RESET_ERROR_ACTION})