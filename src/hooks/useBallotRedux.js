import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';
import { useParams } from "react-router"
import { refreshElections } from "../actions/mainMenuActions";

import { electionSelector } from "../selectors/electionSelector";
import { castVoteThunk } from "../actions/electionActions";

export const useBallotRedux = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(refreshElections()), [dispatch])
  
  // election id from /ballots/:id
  const {id: electionId} = useParams();
  
  const election = useSelector(electionSelector(electionId));

  const voterId = useSelector(state => state.voterId)

  const {questions, name: electionName} = election;
  
  
  const actions = useMemo(() => bindActionCreators({
    castVote: castVoteThunk,
  }, dispatch), [dispatch]);
  

  // useEffect(() => dispatch(refreshElectionsThunk()), [dispatch])
  
  return {
    questions,
    electionName,
    electionId,
    voterId,
    ...actions
  }
  
}