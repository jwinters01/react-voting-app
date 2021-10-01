export const SORT_VOTERS_ACTION = "SORT_VOTERS";
export const EDIT_VOTER_ACTION = "EDIT_VOTERS";
export const CANCEL_VOTER_ACTION = "CANCEL_VOTERS";
export const REMOVE_SINGLE_VOTER_REQUEST_ACTION = "REMOVE_SINGLE_VOTER_REQUEST";
export const REMOVE_SINGLE_VOTER_DONE_ACTION = "REMOVE_SINGLE_VOTER_DONE";

export const REFRESH_ELECTIONS_REQUEST_ACTION = "REFRESH_ELECTIONS_REQUEST";
export const REFRESH_ELECTIONS_DONE_ACTION = "REFRESH_ELECTIONS_DONE";

export const ADD_RFORM_REQUEST_ACTION = "ADD_FORM_REQUEST";
export const ADD_RFORM_DONE_ACTION = "ADD_FORM_DONE";
export const REFRESH_VOTERS_REQUEST_ACTION = "REFRESH_VOTER_REQUEST";
export const REFRESH_VOTERS_DONE_ACTION = "REFRESH_VOTERS_DONE";


export const REPLACE_VOTER_REQUEST_ACTION = "REPLACE_VOTER_REQUEST"
export const REPLACE_VOTER_DONE_ACTION = "REPLACE_VOTER_DONE"


export const createRefreshElectionsRequestAction = () => ({
  type: REFRESH_ELECTIONS_REQUEST_ACTION,
});
export const createRefreshElectionsDoneAction = (elections) => ({
  type: REFRESH_ELECTIONS_DONE_ACTION,
  elections,
});
export const createAddFormRequestAction = (newForm) => ({
  type: ADD_RFORM_REQUEST_ACTION,
  rform: newForm,
});
export const createAddFormDoneAction = (addedForm) => ({
  type: ADD_RFORM_DONE_ACTION,
  rform: addedForm,
});

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});
export const createRefreshVotersDoneAction = (voters) => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const createSortVotersAction = (col) => ({
  type: SORT_VOTERS_ACTION,
  col,
});

export const createRemoveSingleVoterRequestAction = (voterId) => ({
  type: REMOVE_SINGLE_VOTER_REQUEST_ACTION,
  voterId,
});
export const createRemoveSingleVoterDoneAction = () => ({
  type: REMOVE_SINGLE_VOTER_DONE_ACTION,
});

export const createEditVoterAction = (voterId) => ({
  type: EDIT_VOTER_ACTION,
  voterId,
});
export const createCancelVoterAction = () => ({ type: CANCEL_VOTER_ACTION });


export const createReplaceVoterRequestAction = voterId=>({type: REPLACE_VOTER_REQUEST_ACTION, voterId});
export const createReplaceVoterDoneAction = ()=>({type:REPLACE_VOTER_DONE_ACTION})

export const refreshVoters = () => {
  return (dispatch) => {
    dispatch(createRefreshVotersRequestAction());

    return fetch("http://localhost:3060/voters")
      .then((res) => res.json())
      .then((voters) => dispatch(createRefreshVotersDoneAction(voters)));
  };
};

export const refreshElections = () => {
  // this function being returned is the thunk action
  return (dispatch) => {
    dispatch(createRefreshElectionsRequestAction());

    return fetch("http://localhost:3060/elections")
      .then((res) => res.json())
      .then((elections) =>
        dispatch(createRefreshElectionsDoneAction(elections))
      );
  };
};

export const addForm = (newForm) => {
  return async (dispatch) => {
    dispatch(createAddFormRequestAction(newForm));

    const res = await fetch("http://localhost:3060/voters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    });

    const addedForm = await res.json();

    dispatch(createAddFormDoneAction(addedForm));
  };
};

export const removeVoter = (voterId) => {
  return async (dispatch) => {
    dispatch(createRemoveSingleVoterRequestAction(voterId));

    await fetch("http://localhost:3060/voters/" + encodeURIComponent(voterId), {
      method: "DELETE",
    });

    dispatch(createRemoveSingleVoterDoneAction());
    dispatch(refreshVoters());
  };
};


export const replaceVoter = (voter) => {

  return async dispatch => {

    dispatch(createReplaceVoterRequestAction(voter));

    await fetch('http://localhost:3060/voters/' + encodeURIComponent(voter.id),
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voter),
      });

    dispatch(createReplaceVoterDoneAction());
    dispatch(refreshVoters());
  };

};