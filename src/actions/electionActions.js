
import { refreshElections } from "./mainMenuActions";

export const CAST_VOTE_REQUEST_ACTION = 'CAST_VOTE_REQUEST'
export const CAST_VOTE_DONE_ACTION = 'CAST_VOTE_DONE'

export const createCastVoteRequestAction = () => ({
  type: CAST_VOTE_REQUEST_ACTION
});
export const createCastVoteDoneAction = () => ({
  type: CAST_VOTE_DONE_ACTION
})

export const castVoteThunk = (electionId, results) => {


  return async dispatch => {

    dispatch(createCastVoteRequestAction());

    /** pitfall: do not use forEach here:
    forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    for (const questionId of results) {
      
      // http://localhost:3060/elections/1/questions/1
      const url = 'http://localhost:3060/elections/' + encodeURIComponent(electionId) + '/questions/' + encodeURIComponent(questionId) + '/count'

      const countResp = await fetch(url)

      const count = await countResp.json()
      
      const voteResp = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(count + 1)
      })

      const res = await voteResp.json()

      dispatch(createCastVoteDoneAction(res))
      dispatch(refreshElections())
    }
    
  }
  
}