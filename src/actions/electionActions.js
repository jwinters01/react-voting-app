
export const CAST_VOTE_REQUEST_ACTION = 'CAST_VOTE_REQUEST'
export const CAST_VOTE_DONE_ACTION = 'CAST_VOTE_DONE'

export const createCastVoteRequestAction = () => ({
  type: CAST_VOTE_REQUEST_ACTION
});
export const createCastVoteDoneAction = () => ({
  type: CAST_VOTE_DONE_ACTION
})

export const castVoteThunk = (results) => {


  return async dispatch => {

    dispatch(createCastVoteRequestAction());

    return fetch('http://localhost:3060/elections/' + encodeURIComponent())
    
  }
  
}