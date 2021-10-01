
import { refreshElections } from "./mainMenuActions";

export const CAST_VOTE_REQUEST_ACTION = 'CAST_VOTE_REQUEST'
export const CAST_VOTE_DONE_ACTION = 'CAST_VOTE_DONE'

export const createCastVoteRequestAction = () => ({
  type: CAST_VOTE_REQUEST_ACTION
});
export const createCastVoteDoneAction = () => ({
  type: CAST_VOTE_DONE_ACTION
})

export const castVoteThunk = (electionId, voterId, results) => {


  return async dispatch => {

    dispatch(createCastVoteRequestAction());

    const urlGetElection = 'http://localhost:3060/elections/' + encodeURIComponent(electionId);

    const electionResp = await fetch(urlGetElection);

    const election = await electionResp.json()

    const {questions, voterIds} = election

    const newElection = {
      ...election,
      questions: questions.map(
        q => results.includes(q.id) ? 
        { ...q, count: q.count + 1 } : 
        q),
      voterIds: voterIds.includes(voterId) ? voterIds : [
        ...voterIds,
        voterId
      ]
    }

    const voteResp = await fetch(urlGetElection, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newElection)
    })
    
    await voteResp.json()
    
    dispatch(createCastVoteDoneAction())
    dispatch(refreshElections())
    
  }
  
}