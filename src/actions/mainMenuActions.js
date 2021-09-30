
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_CARS_DONE';

export const ADD_RFORM_REQUEST_ACTION = 'ADD_FORM_REQUEST';
export const ADD_RFORM_DONE_ACTION = 'ADD_FORM_DONE';

export const createRefreshElectionsRequestAction = () => ({ type: REFRESH_ELECTIONS_REQUEST_ACTION });
export const createRefreshElectionsDoneAction = (elections) => ({ type: REFRESH_ELECTIONS_DONE_ACTION, elections });

export const createAddFormRequestAction = newForm => ({ type: ADD_RFORM_REQUEST_ACTION, rform: newForm });
export const createAddFormDoneAction = addedForm => ({ type: ADD_RFORM_DONE_ACTION, rform: addedForm });

export const refreshElections = () => {

    // this function being returned is the thunk action
    return dispatch => {
      dispatch(createRefreshElectionsRequestAction());
  
      return fetch('http://localhost:3060/elections')
        .then(res => res.json())
        .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
    };
  };

  export const addForm = (newForm) => {

    return async dispatch => {
  
      dispatch(createAddFormRequestAction(newForm));
  
      const res = await fetch('http://localhost:3060/voters',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newForm),
        });
  
      const addedForm = await res.json();
  
      dispatch(createAddFormDoneAction(addedForm));
    };
  
  };